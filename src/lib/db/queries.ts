import { supabase, type Tables } from '$lib/db/supabaseClient';

async function getTestimonials() {
	const { data, error } = await supabase
		.from('testimonials')
		.select('*')
		.filter('status', 'eq', 'published')
		.order('date_created', { ascending: false });
	if (error) {
		console.log(error);
		return [];
	}
	return data;
}

async function getSenseis() {
	const { data, error } = await supabase
		.from('senseis')
		.select('*')
		.filter('status', 'eq', 'published');
	if (error) {
		console.log(error);
		return [];
	}
	return data;
}

async function getPageBlocks(
	blockName: string,
	pages_blocks: Tables<'pages_blocks'>[]
): Promise<Blocks> {
	const blockIds = pages_blocks
		.filter((block) => block.collection === blockName)
		.map((block) => block.item);
	if (!blockIds.length) return [];
	const { data, error } = await supabase
		.from(blockName)
		.select('*')
		.in('id', blockIds)
		.eq('status', 'published');
	if (error) {
		console.log(error);
		return [];
	}
	return data;
}

export type BlockCardGroup = Tables<'block_cardgroup'>;
export type BlockHero = Tables<'block_hero'>;
export type BlockMediaSection = Tables<'block_mediasection'>;
export type Block = BlockCardGroup | BlockHero | BlockMediaSection;
export type Blocks = Block[];
export type Testimonials = Awaited<ReturnType<typeof getTestimonials>>;
export type Senseis = Awaited<ReturnType<typeof getSenseis>>;

export async function getPage(slug: string) {
	const { data, error } = await supabase
		.from('pages')
		.select(
			`
    id,
    slug,
    title,
    pages_blocks (*)
  `
		)
		.eq('slug', slug)
		.single();

	if (!data || error) return null;

	let blocks_data: Blocks = [];
	let testimonials: Testimonials = [];
	let senseis: Senseis = [];

	const heroData = await getPageBlocks('block_hero', data.pages_blocks);
	const mediaData = await getPageBlocks('block_mediasection', data.pages_blocks);
	const cardGroupData = (await getPageBlocks(
		'block_cardgroup',
		data.pages_blocks
	)) as BlockCardGroup[];
	blocks_data = blocks_data.concat(heroData, mediaData, cardGroupData);

	//check if testimonials are used in a card group
	if (cardGroupData?.some((block: BlockCardGroup) => block.group_type === 'testimonials')) {
		testimonials = await getTestimonials();
	}
	//check if senseis are used in a card group
	if (cardGroupData?.some((block: BlockCardGroup) => block.group_type === 'senseis')) {
		senseis = await getSenseis();
	}

	const pageData = {
		...data,
		pages_blocks: data.pages_blocks.map((block) => ({
			...block,
			item: blocks_data.find((b) => b.id === block.item)
		}))
	};

	return {
		page: pageData,
		testimonials,
		senseis
	};
}

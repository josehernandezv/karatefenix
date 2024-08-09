import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabaseClient';
import { error } from '@sveltejs/kit';
import { getExcerpt } from '$lib/helper';

export const load: PageServerLoad = async ({ params }) => {
	const { data } = await supabase
		.from('posts')
		.select('*, cover: directus_files(*), category: post_categories(title, slug)')
		.eq('slug', params.slug)
		.single();

	if (!data) {
		error(404, 'Not found');
	}

	let meta_image = '';
	if (data.cover?.filename_disk) {
		const url = supabase.storage.from('images').getPublicUrl(data.cover?.filename_disk);
		meta_image = url.data.publicUrl;
	}

	return {
		post: data,
		meta_title: data.title,
		meta_description: getExcerpt(data.content || ''),
		meta_image
	};
};

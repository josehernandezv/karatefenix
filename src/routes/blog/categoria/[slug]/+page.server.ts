import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabaseClient';

export const load: PageServerLoad = async ({ params }) => {
	const { data } = await supabase
		.from('posts')
		.select(
			'*, cover: directus_files(*), category: post_categories!inner(title, slug, description)'
		)
		.eq('category.slug', params.slug)
		.filter('status', 'eq', 'published')
		.order('date_created', { ascending: false });

	return { posts: data || [], category: data?.length ? data[0].category : null };
};

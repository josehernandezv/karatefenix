import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabaseClient';

export const load: PageServerLoad = async ({ url }) => {
	const category = url.searchParams.get('categoria');

	let query = supabase
		.from('posts')
		.select(
			'*, cover: directus_files(*), category: post_categories!inner(title, slug, description)'
		)
		.filter('status', 'eq', 'published')
		.order('date_created', { ascending: false });

	if (category) {
		query = query.filter('category.slug', 'eq', category);
	}

	const { data } = await query;

	return { posts: data || [], category: category && data?.length ? data[0].category : null };
};

import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabaseClient';

export const load: PageServerLoad = async () => {
	const { data } = await supabase
		.from('posts')
		.select('*, cover: directus_files(*), category: post_categories(title, slug, description)')
		.filter('status', 'eq', 'published')
		.order('date_created', { ascending: false });

	return { posts: data || [] };
};

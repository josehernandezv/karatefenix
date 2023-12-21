import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabaseClient';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { data } = await supabase
		.from('posts')
		.select('*, cover: directus_files(*), category: post_categories(title, slug)')
		.eq('slug', params.slug)
		.single();

	if (!data) {
		error(404, 'Not found');
	}

	return { post: data };
};
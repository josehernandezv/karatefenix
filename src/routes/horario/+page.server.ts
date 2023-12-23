import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabaseClient';

export const load: PageServerLoad = async () => {
	const { data } = await supabase
		.from('classes')
		.select('*')
		.filter('status', 'eq', 'published')
		.order('sort');

	return { classes: data || [] };
};

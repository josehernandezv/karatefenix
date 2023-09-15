import type { PageServerLoad } from './$types';
import { getPage } from '$lib/db/queries';
import { supabase } from '$lib/db/supabaseClient';

export const load: PageServerLoad = async () => {
	const pageData = await getPage('preguntas-frecuentes');
	const { data } = await supabase
		.from('faqs')
		.select('*')
		.filter('status', 'eq', 'published')
		.order('sort');
	return { ...pageData, faqs: data || [] };
};

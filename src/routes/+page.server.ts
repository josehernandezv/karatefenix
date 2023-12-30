import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPage } from '$lib/db/queries';

export const load: PageServerLoad = async () => {
	const data = await getPage('home');
	if (!data) {
		error(404, {
        			message: 'Página no encontrada'
        		});
	}
	return { ...data };
};

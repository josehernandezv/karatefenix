import type { PageServerLoad } from './$types';
import { getPage } from '$lib/db/queries';

export const load: PageServerLoad = async () => {
	const data = await getPage('preguntas-frecuentes');
	return { ...data };
};

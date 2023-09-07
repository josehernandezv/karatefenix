import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());
		console.log(data);
		if (!data.name || !data.email || !data.content) {
			return fail(400, { problem: 'Todos los campos son requeridos', data });
		}
		//validate email
		if (!emailRegex.test(`${data.email}`)) {
			return fail(400, { problem: 'El correo no es válido', data });
		}
		// send email
		return { success: 'Gracias. Pronto nos pondremos en contacto contigo.' };
	}
} satisfies Actions;

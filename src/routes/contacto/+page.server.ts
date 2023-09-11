import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import sgMail, { ResponseError } from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY || '');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isResponseError(error: unknown): error is ResponseError {
	return typeof error === 'object' && error !== null && 'response' in error;
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());
		if (data.lastName) {
			return fail(400, { problem: '¡No eres humano! 🤖', data });
		}
		if (!data.name || !data.email || !data.content) {
			return fail(400, { problem: 'Todos los campos son requeridos', data });
		}
		//validate email
		if (!emailRegex.test(`${data.email}`)) {
			return fail(400, { problem: 'El correo no es válido', data });
		}
		// send email
		const message = `
		Nombre: ${data.name}\r\n
		Correo: ${data.email}\r\n
		Mensaje: ${data.content}
`;
		try {
			await sgMail.send({
				from: 'contacto@karatefenix.com', // could be any email
				to: 'contacto@karatefenix.com', // forwards to personal email
				subject: 'Nuevo mensaje de la página web',
				text: message,
				html: `${message.replace(/\r\n/g, '<br />')}`
			});
			return { success: 'Gracias. Pronto nos pondremos en contacto contigo.' };
		} catch (error: unknown) {
			if (isResponseError(error)) {
				console.error(error.response.body);
			}
			return fail(400, {
				problem: 'Hubo un problema enviando el correo. Por favor intente de nuevo más tarde.',
				data
			});
		}
	}
} satisfies Actions;

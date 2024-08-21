import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { POSTMARK_TOKEN } from '$env/static/private';
import postmark from 'postmark';

const client = new postmark.ServerClient(POSTMARK_TOKEN);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
			const response = await client.sendEmail({
				From: `contacto@karatefenix.com`, // could be any email
				To: 'contacto@karatefenix.com', // forwards to personal email
				Subject: 'Nuevo mensaje de la página web',
				TextBody: message,
				HtmlBody: `${message.replace(/\r\n/g, '<br />')}`,
				MessageStream: 'outbound'
			});
			if (response.MessageID)
				return { success: 'Gracias. Pronto nos pondremos en contacto contigo.' };
			throw new Error('No se pudo enviar el correo');
		} catch (error: unknown) {
			return fail(400, {
				problem: 'Hubo un problema enviando el correo. Por favor intente de nuevo más tarde.',
				data
			});
		}
	}
} satisfies Actions;

export const prerender = false;

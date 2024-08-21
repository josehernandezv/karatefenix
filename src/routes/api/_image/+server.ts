import { createRequestHandler } from '@urami/core';
import type { RequestHandler } from '@sveltejs/kit';

const handler = createRequestHandler({
	remoteDomains: ['nuikutewokvkmyyepjgu.supabase.co']
});

export const GET: RequestHandler = (event) => handler(event.request);

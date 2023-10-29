
import { authGuards } from '$lib/guards';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = event.cookies;

	if (event.url.pathname === '/login') {
		try {
			await authGuards(cookies);
		} catch (error) {
			const response = await resolve(event);
			return response;
		}

		throw redirect(302, '/');
	}

	await authGuards(cookies);
	const response = await resolve(event);
	return response;
};

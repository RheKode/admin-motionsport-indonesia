import { redirect, type Cookies } from '@sveltejs/kit';

export const authGuards = async (cookies: Cookies): Promise<string> => {
	const auth = cookies.get('auth');

	if (auth === undefined) {
		throw redirect(302, '/login');
	}

	return auth;
};

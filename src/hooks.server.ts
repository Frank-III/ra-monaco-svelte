import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	
	// Add security headers
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
	// Set CORP header on worker scripts
  if (event.url.pathname.endsWith('.js')) {
    response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  }
	
	return response;
};
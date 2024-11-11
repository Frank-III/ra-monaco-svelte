import type { Handle, HandleFetch } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	
	// Add security headers
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
	response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');

	// Set CORP header on worker scripts
	// if (event.url.pathname.includes('js')) {
	// 		console.log(event.url.pathname);
	// }
    
	
	return response;
};

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	const response = await fetch(request);
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
	response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
	return response;
};
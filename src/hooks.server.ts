import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
	let lang = event.request.headers.get('accept-language')?.split(',')[0]
	
	if (lang) {
		lang = new Intl.Locale(lang).language
		locale.set(lang)
	}
	return resolve(event)
}
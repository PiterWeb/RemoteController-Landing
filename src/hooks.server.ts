import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
	let lang = event.request.headers.get('accept-language')?.split(',')[0]
	
	if (lang) {
		lang = new Intl.Locale(lang).language
		locale.set(lang)
		return resolve(event)
	}

	const userAgent = event.request.headers.get('user-agent')?.toLowerCase()

	switch (true) {
		case userAgent?.includes('googlebot'):
		case userAgent?.includes('bingbot'):
		case userAgent?.includes('yahooua'):
			locale.set('en')
			break
		case userAgent?.includes('baiduspider'):
			locale.set('zh')
			break
		case userAgent?.includes('yandexbot'):
			locale.set('ru')
		break
		default:
			locale.set('en')
	}

	return resolve(event)

}
import { browser } from '$app/environment';
import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

export const defaultLocale = 'en';

register('en', () => import('./en.json'));
register('es', () => import('./es.json'));
register('gl', () => import('./gl.json'));
register('ru', () => import('./ru.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser
		? new Intl.Locale(getLocaleFromNavigator() ?? defaultLocale).language
		: defaultLocale
});

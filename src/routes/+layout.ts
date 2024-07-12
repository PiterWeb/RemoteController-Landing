export const prerender = true;

import { defaultLocale } from '$lib/../lang/lang';
import { browser } from '$app/environment';
import { getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(new Intl.Locale(getLocaleFromNavigator() ?? defaultLocale).language);
	}
	await waitLocale();
};

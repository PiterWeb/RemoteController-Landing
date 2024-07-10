<script lang="ts">
	import { locale, locales } from 'svelte-i18n';
	import { _ } from 'svelte-i18n';
	import type { ChangeEventHandler } from 'svelte/elements';
	import { get } from 'svelte/store';

	function getLocaleName(locale: string) {
		return new Intl.DisplayNames(locale, { type: 'language' }).of(locale) ?? '';
	}

	// (e: HTMLSelectElement) => console.log(e.target.value)

	function setLocale(e: any) {
		const locale_selected = e.target.value;
		console.log(locale_selected);
		locale.set(locale_selected);
	}
</script>

<form class="w-fit p-0 m-0">
	<select
		on:change={setLocale}
		aria-label="Select a language"
		id="countries"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4563e5] focus:border-[#4563e5] block w-full p-2"
	>
		{#each $locales as locale_element}
			<option value={locale_element} selected={get(locale) === locale_element}
				>{getLocaleName(locale_element)}</option
			>
		{/each}
	</select>
</form>

<script lang="ts">
	import { locale, locales } from 'svelte-i18n';
	import { _ } from 'svelte-i18n';

	function getLocaleName(locale: string) {
		const localeName = new Intl.DisplayNames(locale, { type: 'language' }).of(locale) ?? '';
		return localeName.charAt(0).toUpperCase() + localeName.slice(1);
	} 

</script>

<form class="w-fit p-0 m-0">
	<select
		bind:value={$locale}
		aria-label="Select a language"
		id="countries"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4563e5] focus:border-[#4563e5] block w-full p-2"
	>
		{#each $locales as locale_element}
			<option value={locale_element}>
				{getLocaleName(locale_element)}
			</option>
		{/each}
	</select>
</form>

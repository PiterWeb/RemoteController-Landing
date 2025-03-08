<script lang="ts">
	import '$lib/../app.css';
	import '$lib/../lang/lang';
	import GamepadSVG from '$lib/assets/gamepad.svg?raw';
	import SupportSVG from '$lib/assets/support.svg?raw';
	import Footer from '$lib/components/Footer.svelte';

	import { onNavigate } from '$app/navigation';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import 'flag-icons/css/flag-icons.min.css';

	import { _ } from 'svelte-i18n';

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<nav class="navbar bg-primary text-primary-content">
	<div class="flex-1">
		<h2>
			<a
				href="/"
				class="btn btn-ghost normal-case text-xl items-start content-center"
				aria-label="Go to home page of LibreRemotePlay website"
			>
				{@html GamepadSVG}

				<span class="hidden md:block">LibreRemotePlay</span>
			</a>
		</h2>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal gap-4 px-1 font-bold items-center">
			<li><a href="/info/guides" class="hover:text-inherit">{$_('layout.guides')}</a></li>
			<li><a href="/download" class="hover:text-inherit">{$_('layout.download')}</a></li>
			<li class="hidden md:block"><a href="/client" class="hover:text-inherit">{$_('layout.play')}</a></li>
			<li>
				<LanguageSelector />
			</li>
		</ul>
	</div>
</nav>

<main>
	<slot />
</main>

<Footer />

<div class="indicator fixed bottom-10 right-8">
	<a
		id="support-us"
		class=" text-white content-center bg-primary flex px-6 py-4 md:rounded-2xl rounded-full gap-1 font-bold"
		href="https://ko-fi.com/piterdev"
		target="_blank"
		rel="noopener noreferrer"
		aria-label={$_('layout.support-us-with-ko-fi-donations')}
	>
		<span class="indicator-item badge badge-warning rounded-full" />

		<span class="md:block hidden">{$_('layout.support_us')}</span>
		{@html SupportSVG}
	</a>
</div>

<style>
	nav {
		view-transition-name: nav;
	}

	#support-us {
		view-transition-name: support-us;
	}
</style>

<script>
	import '../app.css';
	import GamepadSVG from '$lib/assets/gamepad.svg?raw';
	import SupportSVG from '$lib/assets/support.svg?raw';

	import { onNavigate } from '$app/navigation';

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
		<h1>
			<a href="/" class="btn btn-ghost normal-case text-xl items-start content-center">
				{@html GamepadSVG}

				<div class="hidden md:block">Remote Controller</div>
			</a>
		</h1>
	</div>
	<!-- <div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			
		</ul>
	</div> -->
</nav>

<main>
	<slot />
</main>

<a
	id="support-us"
	class="fixed bottom-10 right-8 text-white content-center bg-primary flex px-3 py-4 rounded-2xl gap-1 font-bold"
	href="https://ko-fi.com/piterdev"
	target="_blank"
	rel="noopener noreferrer"
>
	Support us {@html SupportSVG}
</a>

<style>
	nav {
		view-transition-name: nav;
	}

	#support-us {
		view-transition-name: support-us;
	}
</style>

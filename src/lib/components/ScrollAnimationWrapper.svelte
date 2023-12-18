<script lang="ts">
	import { fade, slide, scale, blur } from 'svelte/transition';
	import type { FadeParams, SlideParams, ScaleParams, BlurParams } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: any;

	export let mx: boolean = false;
	export let my: boolean = false;
	export let selectedAnimation: keyof typeof animations = 'fade';

	type AnimationParams = FadeParams | SlideParams | ScaleParams | BlurParams;

	const animations = {
		fade,
		slide,
		scale,
		blur,
	};

	function onChange({ detail }: any) {
		isInView = detail.inView;
	}

	function customAnimation(node: any, options?: AnimationParams) {
		// @ts-ignore
		return animations[selectedAnimation](node, options);
	}
</script>

<div
	class="w-full h-full"
	class:mx-auto={mx}
	class:my-auto={my}
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%', threshold: 0.10 }}
	on:change={onChange}
>
	{#if isInView}
		<div in:customAnimation class="min-w-fit min-h-fit" class:h-full={my}>
			<slot />
		</div>
	{/if}
</div>

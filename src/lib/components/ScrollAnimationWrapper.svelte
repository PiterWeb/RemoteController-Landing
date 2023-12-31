<script lang="ts">
	import { fade, slide, scale, blur } from 'svelte/transition';
	import type { FadeParams, SlideParams, ScaleParams, BlurParams } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: any;

	export let mx: boolean = false;
	export let my: boolean = false;
	export let selectedAnimation: keyof typeof animations = 'fade';
	export let placeholderType: 'text' | 'image' | 'card' | undefined = undefined;

	type AnimationParams = FadeParams | SlideParams | ScaleParams | BlurParams;

	const animations = {
		fade,
		slide,
		scale,
		blur
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
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%', threshold: 0.1 }}
	on:change={onChange}
>
	{#if isInView}
		<div in:customAnimation class="min-w-fit min-h-fit" class:h-full={my}>
			<slot />
		</div>
	{:else if placeholderType === 'text'}
		<div class="max-w-sm animate-pulse">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
			<span class="sr-only">Loading...</span>
		</div>
	{:else if placeholderType === 'image'}
		<div
			role="status"
			class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
		>
			<div
				class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
			>
				<svg
					class="w-10 h-10 text-gray-200 dark:text-gray-600"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 18"
				>
					<path
						d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
					/>
				</svg>
			</div>
			<div class="w-full">
				<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
				<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
				<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
				<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
				<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
				<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
			</div>
			<span class="sr-only">Loading...</span>
		</div>
	{:else if placeholderType === 'card'}
		<div
			role="status"
			class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
		>
			<div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
				<svg
					class="w-10 h-10 text-gray-200 dark:text-gray-600"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 20"
				>
					<path
						d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
					/>
					<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
				</svg>
			</div>
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
			<div class="flex items-center mt-4">
				<svg
					class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
					/>
				</svg>
				<div>
					<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
					<div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
				</div>
			</div>
			<span class="sr-only">Loading...</span>
		</div>
	{/if}
</div>

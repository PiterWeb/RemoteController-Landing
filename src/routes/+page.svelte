<script lang="ts">
	import ArrowAction from '$lib/components/ArrowAction.svelte';
	import DownloadSVG from '$lib/assets/download.svg?raw';
	import GuideSVG from '$lib/assets/guide.svg?raw';
	import Star from '$lib/assets/star.svelte';
	import Gamepad from '$lib/assets/gamepad.svelte';

	import Card from '$lib/components/Card.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';
	import MainModal from '$lib/components/MainActionModal.svelte';

	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import Opinions from '$lib/components/Opinions.svelte';

	onMount(() => {
		import('@justinribeiro/lite-youtube');
	});

	function openMainDialog() {
		const dialog = document.getElementById('main-dialog') as HTMLDialogElement;
		dialog.showModal();
	}
</script>

<svelte:head>
	<title>LibreRemotePlay 🕹 {$_('head.title-secondary')}</title>
	<meta name="description" content={$_('head.description')} />
	<meta property="og:title" content={'🕹' + $_('head.title-secondary')} />
	<meta property="og:site_name" content="LibreRemotePlay" />
	<meta property="og:url" content="https://libreremoteplay.vercel.app/" />
	<meta property="og:description" content={$_('head.description')} />
	<meta property="og:type" content="product" />
	<meta property="og:image" content="https://libreremoteplay.vercel.app/gamepad-aqua.webp" />
</svelte:head>

<div
	class="md:grid md:grid-cols-3 md:grid-rows-1 md:items-center md:h-[calc(100vh-3rem-4rem-1rem)] lg:w-2/3 md:mx-auto md:px-0 md:gap-4 px-6 mt-12 w-full flex flex-col h-[calc(100vh-3rem)]"
>
	

	<section class="md:max-w-[65ch] md:ml-24 flex flex-col justify-evenly col-span-2">
		<div>
			<h1 class="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
				Play
				<span
					class="[&amp;::selection]:text-base-content text-transparent relative col-start-1 row-start-1 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
				>
					LOCAL</span
				>

				<span class="whitespace-nowrap">co-op</span> games
				<span
					class="[&amp;::selection]:text-base-content text-transparent relative col-start-1 row-start-1 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
				>
					ONLINE
				</span>
			</h1>
			<h2 class="text-2xl font-bold my-4">
				{$_('index.subtitle')}
			</h2>
		</div>


		<div class="flex flex-col gap-4">
			<div class="w-full" id="btn-explore">
				<a href="/info" class="btn btn-lg w-full"
					>{@html GuideSVG} {$_('btns.explore-our-guides')}</a
				>
			</div>

			<div class="w-full" id="btn-play">
				<button on:click={openMainDialog} class="btn btn-primary btn-lg w-full"
					>{@html DownloadSVG} {$_('btn.start-playing')}</button
				>
			</div>
		</div>
		<Opinions/>
		
	</section>



	<section class="p-4 -z-10">
		<Gamepad className="w-full m-auto stroke-neutral motion-safe:animate-bounce"/>
	</section>
</div>
<ArrowAction targetId="about-remote-controller" />
<section
	id="about-remote-controller"
	class="grid md:grid-cols-3 justify-items-center gap-y-16 gap-x-10 pb-24 pt-28 mx-auto w-3/4 reveal-scale"
>
	<TextBlock
		title={$_('what-is-remote-controller')}
		content={$_('what-is-remote-controller-content')}
	/>

	<TextBlock title={$_('how-does-it-work')} content={$_('how-does-it-work-content')} />

	<TextBlock title={$_('how-do-i-get-started')} content={$_('how-do-i-get-started-content')} />
</section>
<section>
	<div>
		<div class="flex-col md:flex-row flex justify-center items-center gap-8">
			<a
				href="https://www.producthunt.com/posts/remote-controller?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-remote&#0045;controller"
				target="_blank"
				aria-label="View LibreRemotePlay hub on Product Hunt"
				><img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431468&theme=dark"
					alt="LibreRemotePlay - Play&#0032;LOCAL&#0032;co&#0045;op&#0032;games&#0032;ONLINE | Product Hunt"
					style="width: 250px; height: 54px;"
					width="250"
					height="54"
				/></a
			>
			<a
				href="https://github.com/PiterWeb/LibreRemotePlay"
				aria-label={$_('star-us-on-github')}
				class="group flex flex-row items-center gap-4 font-semibold w-64 h-14 border-gray-400 border-2 rounded-lg p-4"
			>
				<Star /> {$_('star-us-on-github')}</a
			>
		</div>
	</div>
</section>
<section class="grid justify-center py-12">
	<a
		class="group md:w-[32rem] w-2/3 mx-auto p-6 rounded-lg shadow bg-white border-orange-600 border-2"
		href={$_('gamelinksafe-url')}
	>
		<header class="flex gap-4">
			<img
				class="w-7 h-7 group-hover:scale-150 transition-all duration-300"
				alt="gamelinksafe logo"
				src="/gamelinksafe-icon.jpg"
			/>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
				{$_('gamelinksafe-title')}
			</h5>
		</header>

		<p class="mb-3 font-normal text-gray-900">
			{$_('gamelinksafe-description')}
		</p>
		<div
			class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:ring-orange-700 focus:ring-4 focus:outline-none"
		>
			{$_('gamelinksafe-call-to-action')}
			<svg
				class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</div>
	</a>
</section>
<section class="mt-24 mb-24 bg-neutral w-full py-12 text-white">
	<h3 class="text-4xl font-black text-center leading-[1.1] capitalize">{$_('how-to-use')}</h3>
	<div class="w-1/2 m-auto mt-4">
		<lite-youtube videoid="L7LKypcls7c">
			<a class="lite-youtube-fallback" href="https://www.youtube.com/watch?v=guJLfqTFfIw"
				>Watch on YouTube: "Sample output of devtools-to-video cli tool"</a
			>
		</lite-youtube>
	</div>
</section>

<section class="w-full py-12">
	<h3 class="text-4xl font-black leading-[1.1] text-center capitalize">{$_('features')}</h3>
	<div class="mt-24 mb-24 md:mx-auto md:w-3/4 w-11/12">
		<article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12 md:ml-0 gap-6">
			<div class="my-auto reveal-fade">
				<Card
					expand
					title={$_('feature.play-any-game')}
					description={$_('feature.play-any-game-content')}
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title={$_('feature.low-latency')}
					description={$_('feature.low-latency-content')}
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title={$_('feature.p2p-connection')}
					description={$_('feature.p2p-connection-content')}
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title={$_('feature.no-account-required')}
					description={$_('feature.no-account-required-content')}
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title={$_('feature.free-and-open-source')}
					description={$_('feature.free-and-open-source-content')}
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title={$_('feature.share-your-video-and-audio')}
					description={$_('feature.share-your-video-and-audio-content')}
				/>
			</div>
		</article>
	</div>
</section>

<section
	class="flex flex-col md:w-3/4 mx-auto h-full px-6 md:px-0 md:flex-row md:items-center mt-12"
>
	<div class="md:w-2/4 h-full">
		<h3 class="text-6xl font-black leading-[1.1] text-center capitalize xl:text-left">
			{$_('os-support')}
		</h3>

		<p class="mt-8 text-xl">{@html $_('os-support-description')}</p>
		<p class="mt-8 text-xl">
			{$_('os-support-browser')}
			<br />
			<a class="link link-primary" href="/client">{$_('os-support-browser-link-text')} </a>
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-3 md:gap-2 gap-4 my-6 items-end">
			<a href="/download">
				<Card title="Windows" />
			</a>
			<a href="/client">
				<Card title="Browser" />
			</a>
			<a href="/download">
				<Card title="Linux" />
			</a>
		</div>
	</div>

	<div class="md:w-2/3 md:-mr-48 p-4 w-full h-full reveal-scale">
		<figure>
			<img src="/iphone.webp" width="100%" height="100%" alt="iphone exposed" class="w-full" />

			<figcaption class="m-auto md:w-1/2 w-full text-center lg:-mt-44 -mt-12">
				Photo by <a
					href="https://unsplash.com/@thombradley?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>Thom Bradley</a
				>
				on
				<a
					href="https://unsplash.com/photos/white-iphone-5-c-on-white-table-1NZcjdo2hKQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>Unsplash</a
				>
			</figcaption>
		</figure>
	</div>
</section>

<section class="py-12 md:py-36">
	<div class="my-auto mx-auto reveal-fade">
		<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
			<div class="shadow rounded-xl">
				<a href="/download">
					<div
						class="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-neutral rounded-xl group"
					>
						<aside class="p-8 space-y-4 md:p-16">
							<h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
								{@html $_('card-title')}
							</h2>

							<p class="font-medium text-blue-100 md:text-2xl">
								{$_('card-description')}
							</p>

							<div
								class="btn btn-warning w-fit group-hover:scale-110 transition-all"
							>
								{$_('card-link-download')}
							</div>
						</aside>

						<aside class="relative hidden md:block">
							<img
								class="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg"
								src="/showcase.jpg"
								alt="Discover our beautiful panel"
							/>
						</aside>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<dialog id="main-dialog" class="modal">
	<MainModal />
</dialog>

<style>
	#btn-explore,
	#btn-play {
		opacity: 0;
		animation-name: reveal-slide;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}

	#btn-play {
		animation-delay: 0.25s;
	}

</style>

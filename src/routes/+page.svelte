<script lang="ts">
	import ArrowAction from '$lib/components/ArrowAction.svelte';
	import DownloadSVG from '$lib/assets/download.svg?raw';
	import GuideSVG from '$lib/assets/guide.svg?raw';

	import Card from '$lib/components/Card.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';
	import MainModal from '$lib/components/MainActionModal.svelte';

	import { _ } from 'svelte-i18n';

	function openMainDialog() {
		const dialog = document.getElementById('main-dialog') as HTMLDialogElement;
		dialog.showModal();
	}
</script>

<svelte:head>
	<title>Remote Controller 🕹 {$_('head.title-secondary')}</title>
	<meta name="description" content={$_('head.description')} />
	<meta
		property="og:title"
		content={"🕹" + $_('head.title-secondary')}
	/>
	<meta property="og:site_name" content="Remote Controller" />
	<meta property="og:url" content="https://remote-controller.vercel.app" />
	<meta property="og:description" content={$_('head.description')} />
	<meta property="og:type" content="product" />
	<meta property="og:image" content="https://remote-controller.vercel.app/gamepad-aqua.webp" />
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

				co-op games
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
				<a href="/info" class="btn btn-lg w-full">{@html GuideSVG} {$_('btns.explore-our-guides')}</a>
			</div>

			<div class="w-full" id="btn-play">
				<button on:click={openMainDialog} class="btn btn-primary btn-lg w-full"
					>{@html DownloadSVG} {$_('btn.start-playing')}</button
				>
			</div>
		</div>
	</section>

	<section class="p-4 -z-10">
		<img src="/gamepad-aqua.webp" alt="gamepad" class="m-auto w-full -rotate-12" />
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

	<TextBlock
		title={$_('how-does-it-work')}
		content={$_('how-does-it-work-content')}
	/>

	<TextBlock
		title={$_('how-do-i-get-started')}
		content={$_('how-do-i-get-started-content')}
	/>
</section>
<section>
	<div>
		<script async defer src="/ghbuttons.min.js"></script>

		<div class="flex-col md:flex-row flex justify-center items-center gap-8">
			<a
				href="https://www.producthunt.com/posts/remote-controller?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-remote&#0045;controller"
				target="_blank"
				aria-label="View Remote Controller hub on Product Hunt"
				><img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431468&theme=dark"
					alt="Remote&#0032;Controller - Play&#0032;LOCAL&#0032;co&#0045;op&#0032;games&#0032;ONLINE | Product Hunt"
					style="width: 250px; height: 54px;"
					width="250"
					height="54"
				/></a
			>
			<!-- Place this tag where you want the button to render. -->
			<a
				class="github-button"
				href="https://github.com/PiterWeb/RemoteController"
				data-color-scheme="no-preference: dark; light: dark; dark: dark;"
				data-icon="octicon-star"
				data-size="large"
				data-show-count="true"
				aria-label="Star PiterWeb/RemoteController on GitHub">STAR US ON Github</a
			>
		</div>
	</div>
</section>
<section class="mt-24 mb-24 bg-neutral w-full py-12 text-white">
	<h3 class="text-4xl font-black text-center leading-[1.1] capitalize">How to use</h3>
	<div
		class="flex flex-col md:flex-row md:justify-center md:items-center gap-8 mt-24 mb-24 md:mx-auto md:3/4 w-11/12"
	>
		<div class="flex flex-col items-center gap-4">
			<p class="text-2xl">Connect your gamepad</p>
			<ul class="steps steps-vertical md:steps-horizontal font-bold mx-auto gap-4">
				<li class="step step-info">Download APP</li>
				<li data-content="1" class="step step-info">Use Browser Client</li>
				<li data-content="2" class="step step-primary">Share Codes</li>
				<li data-content="3" class="step step-primary">Play</li>
			</ul>
		</div>
		<div class="flex flex-col items-center gap-4">
			<p class="text-2xl">Stream your videogame</p>
			<ul class="steps steps-vertical md:steps-horizontal font-bold mx-auto gap-4">
				<li class="step step-primary">Install Drivers</li>
				<li class="step step-primary">Download APP</li>
				<li class="step step-primary">Share Codes</li>
				<li class="step step-primary">Play</li>
			</ul>
		</div>
	</div>
</section>

<section class="w-full py-12">
	<h3 class="text-4xl font-black leading-[1.1] text-center capitalize">Features</h3>
	<div class="mt-24 mb-24 md:mx-auto md:w-3/4 w-11/12">
		<article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12 md:ml-0 gap-6">
			<div class="my-auto reveal-fade">
				<Card
					expand
					title="Play Any Game"
					description="Remote Controller works with <strong>any game that supports controllers</strong> even if it's DRM Free. Just launch the game, and Remote Controller will take care of the rest."
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title="Low Latency"
					description="Thanks to the peer-to-peer connection, Remote Controller has low latency, so you can play games that require quick reflexes."
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title="P2P Connection"
					description="We use a peer-to-peer connection, so you don’t have to worry about your data being compromised."
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title="No account required"
					description="You don’t need to create an account to use Remote Controller. Just follow the steps to download and install the app to <strong>start playing</strong>."
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title="Free and Open Source"
					description="Remote Controller is free and open source. You can <strong>check out the source code</strong> on GitHub."
				/>
			</div>
			<div class="my-auto reveal-fade">
				<Card
					expand
					title="Share your video & audio"
					description="You can enjoy your games with <strong>high quality video and audio streaming</strong>"
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
			OS Support
		</h3>

		<p class="mt-8 text-xl">
			We got you covered! Remote Controller supports <strong>Windows</strong>, and Linux (Soon).
		</p>
		<p class="mt-8 text-xl">
			Also we have a browser client for those who don't want to install anything, it works in almost
			every browser.
			<br />
			<a class="link link-secondary" href="/client">Try our web client </a>
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-3 md:gap-2 gap-4 my-6 items-end">
			<Card title="Windows" />
			<Card title="Browser" />
			<Card title="Linux (Soon)" />
		</div>
	</div>

	<div class="md:w-2/3 md:-mr-48 p-4 w-full h-full reveal-scale">
		<figure>
			<img src="/iphone.webp" width="60%" height="60%" alt="windows OS symbol" class="w-full" />

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
				<div class="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-neutral rounded-xl">
					<aside class="p-8 space-y-4 md:p-16">
						<h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
							It’s <strong>free forever</strong>.
						</h2>

						<p class="font-medium text-blue-100 md:text-2xl">
							No account, no credit card required.
						</p>

						<div>
							<a
								href="/download"
								class="bg-white font-semibold text-neutral-600 px-4 py-2 mt-3 rounded-xl"
							>
								Free Download
							</a>
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

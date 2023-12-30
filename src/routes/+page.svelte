<script lang="ts">
	import ArrowAction from '$lib/components/ArrowAction.svelte';
	import DownloadSVG from '$lib/assets/download.svg?raw';
	import GuideSVG from '$lib/assets/guide.svg?raw';

	import Card from '$lib/components/Card.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';
	import ScrollAnimationWrapper from '$lib/components/ScrollAnimationWrapper.svelte';
	import MainModal from '$lib/components/MainActionModal.svelte';

	function openMainDialog() {
		const dialog = document.getElementById('main-dialog') as HTMLDialogElement;
		dialog.showModal();
	}
</script>

<svelte:head>
	<title>Remote Controller 🕹 Play local co-op games online with your FRIENDS</title>
	<meta name="description" content="Bring Back Afternoon Gaming Sessions" />
	<meta
		property="og:title"
		content="
		🕹
		Play
		local
		co-op
		games
		online
		with
		your
		FRIENDS"
	/>
	<meta property="og:site_name" content="Remote Controller" />
	<meta property="og:url" content="https://remote-controller.vercel.app" />
	<meta property="og:description" content="Bring Back Afternoon Gaming Sessions" />
	<meta property="og:type" content="product" />
	<meta property="og:image" content="https://remote-controller.vercel.app/gamepad-aqua.webp" />
</svelte:head>

<div
	class="flex flex-col w-full px-6 md:px-0 mt-12 md:flex-row md:gap-4 h-[calc(100vh-3rem-4rem)] md:h-[calc(100vh-3rem-4rem-1rem)]"
>
	<section class="md:w-1/3 md:ml-24 flex flex-col justify-evenly">
		<div>
			<h1 class="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
				Play
				<span
					class="[&amp;::selection]:text-base-content text-transparent relative col-start-1 row-start-1 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
					>LOCAL</span
				>

				co-op games
				<span
					class="[&amp;::selection]:text-base-content text-transparent relative col-start-1 row-start-1 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
					>ONLINE</span
				>
			</h1>
			<h2 class="text-2xl font-bold my-4">Do you miss the evenings of cooperative games ?</h2>
		</div>

		<div class="flex flex-col gap-4">
			<ScrollAnimationWrapper selectedAnimation="slide">
				<a href="/info" class="btn btn-lg w-full space-y-4">{@html GuideSVG} Explore Our Guides</a>
			</ScrollAnimationWrapper>

			<ScrollAnimationWrapper selectedAnimation="slide">
				<button on:click={openMainDialog} class="btn btn-primary btn-lg w-full space-y-4"
					>{@html DownloadSVG} Start Playing</button
				>
			</ScrollAnimationWrapper>
		</div>
	</section>

	<section class="md:w-2/3 p-4 h-full">
		<img src="/gamepad-aqua.webp" alt="gamepad" class="m-auto w-3/5 -rotate-12" />
	</section>
</div>
<ArrowAction targetId="about-remote-controller" />
<section
	id="about-remote-controller"
	class="grid md:grid-cols-3 justify-items-center gap-y-16 gap-x-8 py-24 mx-auto md:3/4 w-11/12"
>
	<ScrollAnimationWrapper selectedAnimation="slide" placeholderType="text">
		<TextBlock
			title="What is Remote Controller?"
			content="Remote Controller is a free and open source app that lets you play local co-op games online
	with your friends, without having to use Steam or any other proprietary gaming online
	services. It just works, it’s like you’re both playing on the same computer!"
		/>
	</ScrollAnimationWrapper>

	<ScrollAnimationWrapper selectedAnimation="slide" placeholderType="text">
		<TextBlock
			title="How does it work?"
			content="Remote Controller uses a peer-to-peer connection, so you don’t have to worry about your data being
	compromised. It also has low latency, so you can play games that require quick reflexes."
		/>
	</ScrollAnimationWrapper>

	<ScrollAnimationWrapper selectedAnimation="slide" placeholderType="text">
		<TextBlock
			title="How do I get started?"
			content="Just follow the steps to download and install the app to start playing."
		/>
	</ScrollAnimationWrapper>
</section>
<section>
	<ScrollAnimationWrapper selectedAnimation="blur">
		<script async defer src="/ghbuttons.min.js"></script>

		<div class="flex justify-center items-center gap-8">
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
	</ScrollAnimationWrapper>
</section>
<section class="mt-24 mb-24 bg-neutral w-full py-12 text-white">
	<h3 class="text-4xl font-black text-center leading-[1.1] capitalize">How to use</h3>
	<div
		class="flex flex-col md:flex-row md:justify-center md:items-center gap-8 mt-24 mb-24 md:mx-auto md:3/4 w-11/12"
	>
		<ScrollAnimationWrapper selectedAnimation="slide">
			<div class="flex flex-col items-center gap-4">
				<p class="text-2xl">Connect your gamepad</p>
				<ul class="steps steps-vertical md:steps-horizontal font-bold mx-auto gap-4">
					<li class="step step-info">Download APP</li>
					<li data-content="1" class="step step-info">Use Browser Client</li>
					<li data-content="2" class="step step-primary">Share Codes</li>
					<li data-content="3" class="step step-primary">Play</li>
				</ul>
			</div>
		</ScrollAnimationWrapper>

		<ScrollAnimationWrapper selectedAnimation="slide">
			<div class="flex flex-col items-center gap-4">
				<p class="text-2xl">Stream your videogame</p>
				<ul class="steps steps-vertical md:steps-horizontal font-bold mx-auto gap-4">
					<li class="step step-primary">Install Drivers</li>
					<li class="step step-primary">Download APP</li>
					<li class="step step-primary">Share Codes</li>
					<li class="step step-primary">Play</li>
				</ul>
			</div>
		</ScrollAnimationWrapper>
	</div>
</section>

<section class="w-full py-12">
	<h3 class="text-4xl font-black leading-[1.1] text-center capitalize">Features</h3>
	<div class="mt-24 mb-24 md:mx-auto md:w-3/4 w-11/12">
		<article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12 md:ml-0 gap-6">
			<ScrollAnimationWrapper selectedAnimation="blur" my>
				<Card
					expand
					title="Play Any Game"
					description="Remote Controller works with any game that supports multiple controllers even if it's DRM Free. Just launch the game, and Remote Controller will take care of the rest."
				/>
			</ScrollAnimationWrapper>
			<ScrollAnimationWrapper selectedAnimation="blur" my>
				<Card
					expand
					title="Low Latency"
					description="Thanks to the peer-to-peer connection, Remote Controller has low latency, so you can play games that require quick reflexes."
				/>
			</ScrollAnimationWrapper>
			<ScrollAnimationWrapper selectedAnimation="blur" my>
				<Card
					expand
					title="P2P Connection"
					description="We use a peer-to-peer connection, so you don’t have to worry about your data being compromised."
				/>
			</ScrollAnimationWrapper>
			<ScrollAnimationWrapper selectedAnimation="blur" my>
				<Card
					expand
					title="No account required"
					description="You don’t need to create an account to use Remote Controller. Just follow the steps to download and install the app to start playing."
				/>
			</ScrollAnimationWrapper>
			<ScrollAnimationWrapper selectedAnimation="blur" my>
				<Card
					expand
					title="Free and Open Source"
					description="Remote Controller is free and open source. You can check out the source code on GitHub."
				/>
			</ScrollAnimationWrapper>
			<ScrollAnimationWrapper selectedAnimation="blur" my>
				<Card
					expand
					title="Share your video & audio"
					description="You can enjoy your games with high quality video and audio streaming"
				/>
			</ScrollAnimationWrapper>
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
			We got you covered! Remote Controller supports Windows, and Linux (Soon).
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

	<div class="md:w-2/3 md:-mr-48 p-4 w-full h-full">
		<ScrollAnimationWrapper mx my selectedAnimation="scale">
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
		</ScrollAnimationWrapper>
	</div>
</section>

<section class="py-12 md:py-36">
	<ScrollAnimationWrapper mx my selectedAnimation="blur">
		<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
			<div class="shadow rounded-xl">
				<div class="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-neutral rounded-xl">
					<aside class="p-8 space-y-4 md:p-16">
						<h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
							It’s free forever.
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
	</ScrollAnimationWrapper>
</section>

<dialog id="main-dialog" class="modal">
	<MainModal />
</dialog>

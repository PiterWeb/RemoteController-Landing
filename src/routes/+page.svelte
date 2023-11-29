<script>
	import ArrowAction from '$lib/components/ArrowAction.svelte';
	import DownloadSVG from '$lib/assets/download.svg?raw';
	import Card from '$lib/components/Card.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<svelte:head>
	<title>Remote Controller 🕹 Play local co-op games online with your FRIENDS</title>
	<meta name="description" content="Bring Back Afternoon Gaming Sessions" />
</svelte:head>

<div
	class="flex flex-col w-full px-6 md:px-0 mt-12 md:flex-row md:gap-4 h-[calc(100vh-3rem-4rem)] md:h-[calc(100vh-3rem-4rem-1rem)]"
>
	<section class="md:w-1/3 md:ml-24 flex flex-col justify-evenly">
		<div>
			<h2 class="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
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
			</h2>
			<h3 class="text-2xl font-bold my-4">Do you miss the evenings of cooperative games ?</h3>
		</div>

		<a href="/info" class="btn btn-primary btn-lg w-full space-y-4"
			>{@html DownloadSVG} Start Playing</a
		>
	</section>

	<section class="md:w-2/3 p-4 h-full">
		<img src="/gamepad-aqua.webp" alt="gamepad" class="m-auto w-3/5 -rotate-12" />
	</section>
</div>
<ArrowAction targetId="about-remote-controller" />
<section
	id="about-remote-controller"
	class="grid md:grid-cols-3 justify-items-center gap-y-16 gap-x-8 py-24 md:mx-auto md:3/4 w-11/12"
>
	<TextBlock
		title="What is Remote Controller?"
		content="Remote Controller is a free and open source app that lets you play local co-op games online
	with your friends, without having to use Steam or any other proprietary gaming online
	services. It just works, it’s like you’re both playing on the same computer!"
	/>

	<TextBlock
		title="How does it work?"
		content="Remote Controller uses a peer-to-peer connection, so you don’t have to worry about your data being
	compromised. It also has low latency, so you can play games that require quick reflexes."
	/>

	<TextBlock
		title="How do I get started?"
		content="Just follow the steps to download and install the app to start playing."
	/>

	<!-- <h3 class="text-4xl font-bold leading-[1.1]"></h3>

		<p class="mt-8 text-xl">
			Play local co-op games online with your friends, without having to use Steam or any other
			propietary gaming online services. It just works, it’s like you’re both playing on the same
			computer!
		</p> -->
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
			<Card
				title="Play Any Game"
				description="Remote Controller works with any game that supports multiple controllers even if it's DRM Free. Just launch the game, and Remote Controller will take care of the rest."
			/>
			<Card
				title="Low Latency"
				description="Thanks to the peer-to-peer connection, Remote Controller has low latency, so you can play games that require quick reflexes."
			/>

			<Card
				title="P2P Connection"
				description="We use a peer-to-peer connection, so you don’t have to worry about your data being compromised."
			/>

			<Card
				title="No account required"
				description="You don’t need to create an account to use Remote Controller. Just follow the steps to download and install the app to start playing."
			/>

			<Card
				title="Free and Open Source"
				description="Remote Controller is free and open source. You can check out the source code on GitHub."
			/>
			<Card
				title="Share your video & audio"
				description="You can enjoy your games with high quality video and audio streaming"
			/>
		</article>
	</div>
</section>

<section class="flex flex-col w-full px-6 md:px-0 md:flex-row md:gap-4 md:items-center my-12">
	<div class="md:ml-24 md:w-1/3">
		<h3 class="text-6xl font-black leading-[1.1] text-center capitalize xl:text-left">
			OS Support
		</h3>

		<p class="mt-8 text-xl">We got you covered! Remote Controller supports Windows, and Linux.</p>
		<p class="mt-8 text-xl">
			Also we have a browser client for those who don't want to install anything, it works in almost
			every browser.
		</p>

		<div class="grid grid-cols-1 lg:grid-cols-3 md:gap-2 gap-4 my-6">
			<Card title="Windows" />
			<Card title="Linux" />
			<Card title="Browser" />
		</div>
	</div>

	<div class="md:w-2/3 p-4 h-full">
		<img src="/os-banner.webp" alt="windows OS symbol" class="m-auto w-3/5" />
	</div>
</section>

<dialog id="download-dialog" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Unlock the Power of Friendship Gaming!</h3>
		<!-- <p class="py-4 text-base">Support the Cause and Keep It Free!</p> -->
		<div class="modal-action flex-wrap gap-x-2 gap-y-4 md:justify-between">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Not Now</button>
			</form>
			<div class="flex flex-row gap-x-2">
				<!-- <a class="btn btn-accent btn-disabled" href="https://ko-fi.com/piterdev">Show your love</a> -->
				<a class="btn btn-primary" href="https://github.com/PiterWeb/RemoteController/releases"
					>Get Gaming!</a
				>
			</div>
		</div>
	</div>
</dialog>

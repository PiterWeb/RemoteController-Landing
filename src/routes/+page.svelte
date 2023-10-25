<script>
	import InfoSVG from '$lib/assets/info.svg?raw';
	import DownloadSVG from '$lib/assets/download.svg?raw';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Remote Controller 🕹 Play local co-op games online with your FRIENDS</title>
	<meta name="description" content="Bring Back Afternoon Gaming Sessions" />
</svelte:head>

<div class="flex flex-col w-full px-6 md:px-0 mt-12 md:flex-row md:gap-4">
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
		<div class="flex flex-col space-y-4">
			<a href="/info" class="btn btn-lg">{@html InfoSVG} User Guides</a>

			<button
				on:click={() => {
					const dialog = document.getElementById('download-dialog');
					// @ts-ignore
					dialog?.showModal();
				}}
				class="btn btn-primary btn-lg">{@html DownloadSVG} Start Playing</button
			>
		</div>
	</section>

	<section class="md:w-2/3 p-4 h-full">
		<div class="mockup-window border bg-primary text-primary-content md:w-3/4 m-auto">
			<img src="/gamepad.jpg" alt="gamepad" class="md:aspect-video aspect-auto" />
		</div>
	</section>
</div>
<section class="flex flex-row flex-wrap md:flex-nowrap gap-8 mt-24 mb-24 md:mx-auto md:3/4 w-11/12">
	<div class="ml-12">
		<h3 class="text-4xl font-bold leading-[1.1]">Bring Back Afternoon Gaming Sessions</h3>

		<p class="mt-8 text-xl">
			Remote Controller helps relive those moments by connecting you and your friends online with
			your favorite local multiplayer games. Just like old times, but better.
		</p>
	</div>
	<div class="ml-12">
		<h3 class="text-4xl font-bold leading-[1.1]">Play Together, Even When Apart</h3>

		<p class="mt-8 text-xl">
			Play local co-op games online with your friends, without having to use Steam or any other
			propietary gaming online services. It just works, it’s like you’re both playing on the same
			computer!
		</p>
	</div>
</section>

<section class="w-full bg-slate-700 py-12">
	<h3 class="text-4xl font-black text-white leading-[1.1] text-center">Features</h3>
	<div class="flex flex-row flex-wrap md:flex-nowrap gap-8 mt-24 mb-24 md:mx-auto md:3/4 w-11/12">
		<article class="ml-12 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<Card
				title="Play Any Game"
				description="Remote Controller works with any game that supports multiple controllers. Just launch the game, and Remote Controller will take care of the rest."
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
				title="Windows 10/11 compatible"
				description="The most used operating system is supported in version 10 and 11."
			/>

			<Card
				title="No account required"
				description="You don’t need to create an account to use Remote Controller. Just follow the steps to download and install the app to start playing."
			/>

			<Card
				title="Free and Open Source"
				description="Remote Controller is free and open source. You can check out the source code on GitHub."
			/>
		</article>
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

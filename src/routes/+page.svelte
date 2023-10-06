<script>
	import InfoSVG from '$lib/assets/info.svg?raw';
	import DownloadSVG from '$lib/assets/download.svg?raw';
</script>

<svelte:head>
	<title>Remote Controller 🕹 Play local co-op games online with your FRIENDS</title>
	<meta name="description" content="Bring Back Afternoon Gaming Sessions">
</svelte:head>

<div class="flex flex-col md:w-full w-11/12 mt-12 md:flex-row">
	<section class="md:w-1/3 ml-12">
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

		<div class="flex flex-col space-y-4">
			<a href="/info" class="btn btn-lg">{@html InfoSVG} Learn more</a>

			<button
				on:click={() => {
					const dialog = document.getElementById('download-dialog');
					// @ts-ignore
					dialog?.showModal();
				}}
				class="btn btn-primary btn-lg">{@html DownloadSVG} Start Playing</button
			>
		</div>

		<div class="mt-24">
			<h3 class="text-4xl font-black leading-[1.1]">Bring Back Afternoon Gaming Sessions</h3>

			<p class="mt-8 text-xl font-bold">
				Remember the days of jam-packed living rooms and good ol’ couch co-op? Remote Controller
				helps relive those moments by connecting you and your friends online with your favorite
				local multiplayer games. Just like old times, but better.
			</p>
		</div>
	</section>

	<section class="md:w-2/3 p-4 h-full">
		<div class="mockup-window border bg-primary text-primary-content md:w-3/4 m-auto">
			<img src="/gamepad.jpg" alt="gamepad" class="md:aspect-video aspect-auto" />
		</div>
	</section>
</div>

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

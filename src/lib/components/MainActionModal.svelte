<script>
	import Card from '$lib/components/Card.svelte';
	import CrossSVG from '$lib/assets/cross.svg?raw';
	import PlaySVG from '$lib/assets/play.svg?raw';
	import DownloadSVG from '$lib/assets/download.svg?raw';
</script>

<div class="modal-box max-w-[75vw] p-0">
	<div class="md:flex w-full flex-row hidden">
		<div
			class="grid flex-grow h-[75vh] w-1/3 card bg-neutral text-neutral-content rounded-box place-items-center"
		>
			<div class="flex flex-col gap-4">
				<h3 class="text-4xl font-black leading-[1.1] text-center capitalize">Play in Browser</h3>

				<p class="text-center px-6">
					You can play in your browser without installing anything, just go to our client page and
					share the code with your friends.
				</p>
			</div>

			<a href="/client" class="btn btn-primary btn-lg space-y-4">{@html PlaySVG} Go to Client</a>
		</div>
		<div class="flex flex-col flex-grow h-[75vh] w-2/3">
			<form method="dialog" class="flex flex-row justify-end p-4">
				<button class="btn btn-ghost btn-sm rounded-full modal-close">
					{@html CrossSVG}
				</button>
			</form>
			<div class="grid card place-items-center rounded-box h-full">
				<div class="flex flex-col gap-4">
					<h3 class="text-4xl font-black leading-[1.1] text-center capitalize">Download APP</h3>

					<p>Download the latest version of Remote Controller for your platform.</p>
				</div>

				<div>
					<h4 class="text-lg font-bold">Supported Platforms</h4>
					<div class="grid grid-cols-1 lg:grid-cols-3 md:gap-2 gap-4 my-6 w-full">
						<Card title="Windows" />
						<Card title="Linux (Soon)" />
						<Card title="Browser" />
					</div>
				</div>

				<a href="/download" class="btn btn-primary btn-lg space-y-4"
					>{@html DownloadSVG} Download APP</a
				>
			</div>
		</div>
	</div>
	<div class="flex w-full flex-col md:hidden">
		<!-- mobile version -->
		<div
			class="grid flex-grow h-[75vh] w-full card bg-neutral text-neutral-content rounded-box place-items-center"
		>
			<div class="flex flex-col gap-2">
				<h3 class="text-4xl font-black leading-[1.1] text-center capitalize px-4">
					Play in Browser
				</h3>

				<p class="text-center px-8">
					You can play in your browser without installing anything, just go to our client page and
					share the code with your friends.
				</p>
			</div>

			<a href="/client" class="btn btn-primary btn-lg space-y-4">{@html PlaySVG} Go to Client</a>
		</div>
	</div>
</div>
<form method="dialog" class="modal-backdrop">
	<button>close</button>
</form>

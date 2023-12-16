<svelte:head>
	<title>Remote Controller 🕹 Explore</title>
</svelte:head>

<div class="flex flex-col w-full mt-12">
	<section id="nav-explore-title" class="p-6">
		<h2 class="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] md:text-left">
			Download
		</h2>
		<h3 class="text-2xl font-bold my-4">
			Get the latest version of Remote Controller for your platform.
		</h3>
	</section>

	<article class="md:col-span-5">
		<div class="bg-gray-100">
			<div class="container mx-auto py-6 px-4">
				<slot />
			</div>
		</div>
	</article>
</div>

<style>
	#nav-explore-title {
		view-transition-name: nav-explore-title;
	}
</style>

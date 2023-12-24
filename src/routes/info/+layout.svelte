<svelte:head>
	<meta property="og:site_name" content="Remote Controller" />
	<meta property="og:url" content="https://remote-controller.vercel.app" />
	<meta property="og:type" content="product" />
	<meta property="og:image" content="https://remote-controller.vercel.app/gamepad-aqua.webp" />
</svelte:head>

<div class="flex flex-col w-full mt-12">
	<section id="nav-explore-title" class="p-6">
		<h2 class="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] md:text-left">
			Information
		</h2>
		<h3 class="text-2xl font-bold my-4">
			Find guides and resources to made easy play with friends.
		</h3>
	</section>

	<section class="p-6 grid grid-cols-1 md:grid-cols-6 gap-12">
		<ul id="nav-explore-menu" class="menu bg-base-200 w-full rounded-box">
			<li><a href="/info/overview">Overview</a></li>
			<li class="menu-title">Guides</li>
			<li><a href="/info/guides/installation">Installation</a></li>
			<li><a href="/info/guides/how-to-use">How to use</a></li>
			<li class="menu-title">Resources</li>
			<li><a href="/info/resources/faq">FAQ</a></li>
			<li><a href="/info/resources/security">Security</a></li>
		</ul>

		<article class="md:col-span-5">
			<div class="bg-gray-100">
				<div class="container mx-auto py-6 px-4">
					<slot />
				</div>
			</div>
		</article>
	</section>
</div>

<style>
	#nav-explore-title {
		view-transition-name: nav-explore-title;
	}

	#nav-explore-menu {
		view-transition-name: nav-explore-menu;
	}
</style>

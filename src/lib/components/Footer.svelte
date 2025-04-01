<script>
	import GamepadSVG from '$lib/assets/gamepad.svg?raw';
	import { discordUrl, githubUrl, wikiUrl } from '$lib/constants';
</script>

<footer id="footer" class="footer p-10 bg-neutral text-neutral-content mt-20">
	<aside>
		{@html GamepadSVG}
		<p>LibreRemotePlay.<br />Play LOCAL co-op games ONLINE</p>
		<h4>Made by <a class="link" href="https://github.com/PiterWeb"> Piterdev </a></h4>
	</aside>
	<nav>
		<header class="footer-title">Product</header>
		<a href={`${githubUrl}/releases`} class="link link-hover"
			>Downloads</a
		>
		<a href={wikiUrl}>Wiki</a>
	</nav>
	<nav>
		<header class="footer-title">Social</header>
		<a href={githubUrl} class="link link-hover">Github</a>
		<a href={discordUrl} class="link link-hover">Discord</a>
		<a href="mailto:piterzdev@gmail.com" class="link link-hover">Contact</a>
	</nav>
	<nav>
		<header class="footer-title">Development</header>
		<a
			href={`${githubUrl}/blob/main/CONTRIBUTING.md`}
			class="link link-hover">Contribute</a
		>
		<a href={`${githubUrl}/tree/main/docs`} class="link link-hover"
			>Docs</a
		>
	</nav>

	<img
		alt="Analytics by LibreCounter"
		decoding="async"
		loading="eager"
		src="https://librecounter.org/counter.svg"
		referrerpolicy="unsafe-url"
		height="0px"
		width="0px"
	/>
</footer>

<style>
	#footer {
		view-transition-name: footer;
	}
</style>

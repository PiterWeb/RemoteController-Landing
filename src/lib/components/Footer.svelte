<script>
	import GamepadSVG from '$lib/assets/gamepad.svg?raw';
</script>

<footer id="footer" class="footer p-10 bg-neutral text-neutral-content mt-20">
	<aside>
		{@html GamepadSVG}
		<p>Remote Controller.<br />Play LOCAL co-op games ONLINE</p>
	</aside>
	<nav>
		<header class="footer-title">Product</header>
		<a href="https://github.com/PiterWeb/RemoteController/releases" class="link link-hover"
			>Downloads</a
		>
		<a href="/info/guides/installation" class="link link-hover">Guides</a>
		<a href="/info/resources/faq" class="link link-hover">FAQ</a>
	</nav>
	<nav>
		<header class="footer-title">Social</header>
		<a href="https://github.com/PiterWeb/RemoteController" class="link link-hover">Github</a>
		<a class="link link-hover">Contact</a>
	</nav>
	<nav>
		<header class="footer-title">Legal</header>
		<a class="link link-hover">Terms of use</a>
		<a class="link link-hover">Privacy policy</a>
		<a class="link link-hover">Cookie policy</a>
	</nav>
</footer>

<style>
	#footer {
		view-transition-name: footer;
	}
</style>

<script lang="ts">
	export let targetId: string;
</script>

<a class="md:block hidden" href={`#${targetId}`} aria-label={`Scroll to the main content of the page with id ${targetId}`}>
	<svg class="arrows mx-auto block md:-mt-20 -mt-56">
		<path class="a1" d="M0 0 L30 32 L60 0" />
		<path class="a2" d="M0 20 L30 52 L60 20" />
		<path class="a3" d="M0 40 L30 72 L60 40" />
	</svg>
</a>

<style>
	.arrows {
		width: 60px;
		height: 72px;
	}

	.arrows path {
		stroke: black;
		fill: transparent;
		stroke-width: 1px;
		animation: arrow 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
		-webkit-animation: arrow 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
	}

	@keyframes arrow {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@-webkit-keyframes arrow /*Safari and Chrome*/ {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	.arrows path.a1 {
		animation-delay: -1s;
		-webkit-animation-delay: -1s; /* Safari 和 Chrome */
	}

	.arrows path.a2 {
		animation-delay: -0.5s;
		-webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
	}

	.arrows path.a3 {
		animation-delay: 0s;
		-webkit-animation-delay: 0s; /* Safari 和 Chrome */
	}
</style>

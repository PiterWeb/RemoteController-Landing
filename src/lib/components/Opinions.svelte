<script>
	
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	const opinions = [
		{
			usr: 'dillfrescott',
			img: '/opinion-1.jpg',
			msg: 'Just discovered this today. this is one of those projects that stands out for me as really neat. Keep up the good work!'
		},
		{
			usr: 'Eliyaan',
			img: '/opinion-2.jpg',
			msg: 'I tested it in the browser with a friend, it works very well. Thanks for your work!'
		}
	];
	
</script>

{#if browser}
	<Carousel
		autoplayDuration={3000}
		duration={5000}
		infinite
		autoplay
		timingFunction="ease-in-out"
		dots={false}
		arrows={false}
		swiping={false}
	>
		{#each opinions as { img, msg, usr }}
			<ul class="pt-10 pb-10 md:px-16">
				<!-- Chat -->
				<li class="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
					<img class="inline-block size-9 rounded-full" src={img} alt={`Avatar ${usr}`} />
					<!-- Card -->
					<div
						class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700"
					>
						<div class="space-y-1.5">
							<p class="mb-1.5 text-sm text-gray-800 dark:text-white">
								{msg}
							</p>
						</div>
					</div>
					<!-- End Card -->
				</li>
				<!-- End Chat -->
			</ul>
		{/each}
	</Carousel>
{/if}

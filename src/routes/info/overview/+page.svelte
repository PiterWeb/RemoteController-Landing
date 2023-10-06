<!-- FILEPATH: d:\Programacion\JS-TS\RemoteController-Landing\src\routes\info\overview\+page.svelte -->

<script lang="ts">
	interface Card {
		title: string;
		description: string;
	}

	const cards: Card[] = [
		{
			title: 'Users',
			description: 'Total number of users: 1000'
		},
		{
			title: 'Sales',
			description: 'Total sales: $10,000'
		},
		{
			title: 'Traffic',
			description: 'Total traffic: 10,000 visits'
		},
		{
			title: 'Production',
			description: 'Total production: 100 units'
		}
	];
</script>

<div class="bg-gray-100">
	<div class="container mx-auto py-6 px-4">
		<h1 class="text-3xl font-bold mb-2">Overview</h1>
		<p class="text-gray-600 mb-6">Here's a quick overview of your application.</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each cards as { title, description }}
				<div
					class="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-800 group transition-colors duration-300"
				>
					<h2 class="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
						{title}
					</h2>
					<p class="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
						{description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>

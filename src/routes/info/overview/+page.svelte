<script lang="ts">
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
	import Card from '$lib/components/Card.svelte';
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

<InfoTemplate title="Overview" description="Here's a quick overview of your application.">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each cards as { title, description }}
			<Card title={title} description={description} />
		{/each}
	</div>
</InfoTemplate>

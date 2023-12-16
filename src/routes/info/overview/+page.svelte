<script lang="ts">
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
	import Card from '$lib/components/Card.svelte';
	import { page } from '$app/stores';

	interface Card {
		title: string;
		description: string;
		link: string;
	}

	const cards: Card[] = [
		{
			title: 'Guides',
			description: 'Learn how to use Remote Controller',
			link: '/info/guides'
		},
		{
			title: 'FAQ',
			description: 'Frequently asked questions',
			link: '/info/resources/faq'
		},
		{
			title: 'Security',
			description: 'Learn how Remote Controller protects your data',
			link: '/info/resources/security'
		}
	];
</script>

<InfoTemplate
	title="Overview"
	description="Here you can learn more about RemoteController and access guides of use"
>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each cards as { title, description, link }}
			<a href={$page.url.origin + link}>
				<Card {title} {description} shadow={false} />
			</a>
		{/each}
	</div>
</InfoTemplate>

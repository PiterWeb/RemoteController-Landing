<script lang="ts">
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
	import Card from '$lib/components/Card.svelte';

	interface Card {
		title: string;
		description: string;
		link: string;
	}

	const cards: Card[] = [
		{
			title: 'Guides',
			description: 'Learn how to install & use LibreRemotePlay',
			link: '/info/guides'
		},
		{
			title: 'FAQ',
			description: 'Frequently asked questions',
			link: '/info/resources/faq'
		},
		{
			title: 'Security',
			description: 'Learn how LibreRemotePlay protects your data',
			link: '/info/resources/security'
		},
		{
			title: 'Download',
			description: "Download LibreRemotePlay for your favourite platform",
			link: "/download"
		}
	];
</script>

<InfoTemplate
	title="Overview"
	description="Here you can learn more about LibreRemotePlay and access guides of use"
>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-11">
		{#each cards as { title, description, link }}
			<a href={link}>
				<Card {title} {description} shadow={false} />
			</a>
		{/each}
	</div>
</InfoTemplate>

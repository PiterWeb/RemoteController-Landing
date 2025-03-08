<script lang="ts">
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
	import Card from '$lib/components/Card.svelte';

	interface CardType {
		title: string;
		description: string;
		link: string;
	}

	const cards: CardType[] = [
		{
			title: 'Windows ARM',
			description: 'Download the latest version of LibreRemotePlay for Windows ARM architecture.',
			link: 'https://github.com/PiterWeb/LibreRemotePlay/releases/latest/download/RemoteController-arm64.exe'
		},
		{
			title: 'Windows AMD (Most common)',
			description: 'Download the latest version of LibreRemotePlay for Windows AMD architecture.',
			link: 'https://github.com/PiterWeb/LibreRemotePlay/releases/latest/download/RemoteController-amd64.exe'
		},
		{
			title: 'Linux',
			description: 'Download the latest version of LibreRemotePlay for Linux.',
			link: ''
		},
		{
			title: 'Source Code',
			description:
				'LibreRemotePlay is free and open source software. You can check out the source code on GitHub.',
			link: 'https://github.com/PiterWeb/LibreRemotePlay/archive/refs/tags/release.zip'
		},
		{
			title: 'Browser Client (No download required)',
			description:
				'You can use LibreRemotePlay without installing the desktop client. Just open the browser client and start playing.',
			link: '/client'
		}
	];
</script>

<InfoTemplate
	title="Download"
	description="LibreRemotePlay is available for Windows and Linux."
>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each cards as { title, description, link }}
			<a href={link}>
				<Card {title} {description} shadow />
			</a>
		{/each}
	</div>
</InfoTemplate>

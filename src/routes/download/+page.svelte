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
			description: 'Download the latest version of Remote Controller for Windows ARM architecture.',
			link: 'https://github.com/PiterWeb/RemoteController/releases/latest/download/RemoteController-arm64.exe'
		},
		{
			title: 'Windows AMD (Most common)',
			description: 'Download the latest version of Remote Controller for Windows AMD architecture.',
			link: 'https://github.com/PiterWeb/RemoteController/releases/latest/download/RemoteController-amd64.exe'
		},
		{
			title: 'Linux (Soon)',
			description: 'Download the latest version of Remote Controller for Linux.',
			link: ''
		},
		{
			title: 'Source Code',
			description:
				'Remote Controller is free and open source software. You can check out the source code on GitHub.',
			link: 'https://github.com/PiterWeb/RemoteController/archive/refs/tags/release.zip'
		},
		{
			title: 'Browser Client (No download required)',
			description:
				'You can use Remote Controller without installing the desktop client. Just open the browser client and start playing.',
			link: '/client'
		}
	];
</script>

<InfoTemplate
	title="Download"
	description="Remote Controller is available for Windows and Linux (Soon)."
>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each cards as { title, description, link }}
			<a href={link}>
				<Card {title} {description} shadow />
			</a>
		{/each}
	</div>
</InfoTemplate>

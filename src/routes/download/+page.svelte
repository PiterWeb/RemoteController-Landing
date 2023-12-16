<script lang="ts">
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
    import { page } from '$app/stores';
	import Card from '$lib/components/Card.svelte';

	interface CardType {
		title: string;
		description: string;
		link: string;
	}

	const cards: CardType[] = [
		{
			title: 'Windows 32 Bits',
			description: 'Download the latest version of Remote Controller for Windows 32 Bits.',
			link: 'https://github.com/PiterWeb/RemoteController/releases/latest/download/RemoteController_windows_x64.exe'
		},
		{
			title: 'Windows 64 Bits',
			description: 'Download the latest version of Remote Controller for Windows 64 Bits.',
			link: 'https://github.com/PiterWeb/RemoteController/releases/latest/download/RemoteController_windows_x86.exe'
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
			title: 'Browser Client (Still in development)',
			description:
				'You can use Remote Controller without installing the desktop client. Just open the browser client and start playing.',
			link: $page.url.origin + '/client'
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

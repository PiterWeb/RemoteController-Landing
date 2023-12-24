<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>📖 {title} - Remote Controller</title>
	<meta name="description" content={description} />
</svelte:head>

<h1 class="text-3xl font-bold mb-2 pl-6">{title}</h1>
<p class="text-gray-600 mb-6 pl-6">{description}</p>

<slot />

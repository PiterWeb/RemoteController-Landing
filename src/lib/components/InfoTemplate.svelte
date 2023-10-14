<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<h1 class="text-3xl font-bold mb-2">{title}</h1>
<p class="text-gray-600 mb-6">{description}</p>

<slot />

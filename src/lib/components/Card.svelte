<script lang="ts">
	export let title: string;
	export let description: string;
	export let shadow: boolean = true;
</script>

<section
	class="bg-white rounded-lg shadow-lg p-6 hover:bg-neutral group transition-colors duration-300"
	class:drop-shadow={shadow}
>
	<h2 class="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
		{title}
	</h2>
	<p class="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
		{description}
	</p>
</section>

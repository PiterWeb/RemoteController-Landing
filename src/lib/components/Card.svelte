<script lang="ts">
	export let title: string;
	export let description: string | undefined = undefined;
	export let shadow: boolean = true;
</script>


	<section
		class="bg-white rounded-lg shadow-lg p-6 hover:bg-neutral group transition-colors duration-300"
		class:drop-shadow={shadow}
	>
		<h2
			class="font-bold group-hover:text-white transition-colors duration-300"
			class:text-2xl={description === undefined}
			class:text-center={description === undefined}
			class:text-lg={description !== undefined}
		>
			{title}
		</h2>
		{#if description}
			<p class="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
				{description}
			</p>
		{/if}
	</section>

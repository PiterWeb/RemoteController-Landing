<script lang="ts">

    export let title: string = "Placeholder Title";
    export let content: string = "Placeholder Content";
    export let id: string = "#";

</script>

<article {id} class="max-w-[65ch]">
    <h3 class="text-3xl font-bold leading-[1.1]">{title}</h3>
    
    <p class="mt-8 text-lg">
        {@html content}
    </p>
</article>
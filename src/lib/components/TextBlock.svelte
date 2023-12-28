<script lang="ts">

    export let title: string = "Placeholder Title";
    export let content: string = "Placeholder Content";
    export let id: string = "#";

</script>

<article {id} class="ml-12">
    <h3 class="text-4xl font-bold leading-[1.1]">{title}</h3>
    
    <p class="mt-8 text-xl">
        {content}
    </p>
</article>
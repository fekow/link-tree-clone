<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from "$app/forms";
    let input:HTMLInputElement;
    export let data: PageData;
</script>
<h1>{data.boatName}</h1>

<form method="post" action="?/rename" use:enhance on:submit={() => {input.focus()}}>
    <input type="text" name="boatName" bind:this={input}>
    <button type="submit">Submit</button>
    <button formaction="?/capitalize" type="submit">Capitalize</button>
</form>
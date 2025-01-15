<script lang="ts">
    // import { browser } from '$app/environment;
    import { onMount } from "svelte";
    import Quill       from "quill";

    import 'quill/dist/quill.snow.css'

    let container: HTMLElement;
    let editor: Quill;
    let content = "";

    const options = {
        theme: "snow",
    };

    onMount(() => {
        editor = new Quill(container, options);
    });
</script>

<div bind:this={container}>
    <textarea class="w-full h-64"></textarea>
</div>

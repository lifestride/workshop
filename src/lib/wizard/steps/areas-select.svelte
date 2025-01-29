<script lang="ts">
    import { persistentStore } from "$lib/persistentStore";
    import { areas }           from "$lib/data/areas";

    const selectedAreas = persistentStore("selected-areas", []);
</script>

<article class="prose">
    <h1>Select Your Life Areas</h1>
    <section>
        <p>After your previous reflection, let’s now select your own areas of life.</p>
        <p>Below are some examples of the most common areas of life people choose from. Most people usually pick between 4 to 8 areas of
            life.</p>
        <p>You do not need to select all these areas; start small and then you can expand to other areas.</p>

        <ul>
            {#each areas as area, i}
                <li class="p-1">
                    <input type="checkbox" name="selected-areas" bind:group={$selectedAreas} value="{area.uid}" id="area-{i}" />
                    <label for="area-{i}" class="font-bold">{area.name}</label>
                    <p class="my-1">{area.description}</p>
                </li>
            {/each}
        </ul>
    </section>
</article>

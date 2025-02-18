<script lang="ts">
    import { areas }           from "$lib/data/areas";
    import decoration          from "$lib/data/decoration.json";
    import { persistentStore } from "$lib/persistentStore";

    const selectedAreas = persistentStore<string[]>("selected-areas", []);
</script>

<article class="prose">
    <h1>Select Your Life Areas</h1>
    <section>
        <p>After your previous reflection, let’s now select your own areas of life.</p>
        <p>Below are some examples of the most common areas of life people choose from. Most people usually pick between 4 to 8 areas of
            life.</p>
        <p>You do not need to select all these areas; start small and then you can expand to other areas.</p>
    </section>
    <section class="two-cols">
        {#each areas as area, i}
            {@const accentColor = decoration[area.uid].accentColor}
            <section class="card" style="background-color: {accentColor};">
                <input type="checkbox" name="selected-areas" bind:group={$selectedAreas} value="{area.uid}" id="area-{i}" />
                <label for="area-{i}" class="font-bold">{area.name}</label>
                <p class="my-1">{area.description}</p>
            </section>
        {/each}
    </section>
</article>

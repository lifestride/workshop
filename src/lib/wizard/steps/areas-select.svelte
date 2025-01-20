<script lang="ts">
    import { areas } from "$lib/data/areas";
</script>

<article class="prose max-w-full">
    <h2>Select your Life Areas</h2>
    <section>
        <p>After your previous reflection, let’s now select your own areas of life.</p>
        <p>Below are some examples of the most common areas of life people choose from. Most people usually pick between 4 to 8 areas of
            life.</p>
        <p>You do not need to select all these areas; start small and then you can expand to other areas.</p>

        <ul>
            {#each areas as area}
                <li><strong>{area.name}</strong>: {area.description}</li>
            {/each}
        </ul>
    </section>
    <section>
        <h3>Activity</h3>
        <p>After reviewing all the different areas of life, select the areas you would like to focus:</p>
        <ul>
            {#each areas as area, i}
                <li>
                    <input type="checkbox" id="area-{i}" />
                    <label for="area-{i}">{area.name}</label>
                </li>
            {/each}
        </ul>
    </section>
</article>

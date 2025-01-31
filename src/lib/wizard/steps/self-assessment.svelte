<script lang="ts">
    import { persistentStore } from "$lib/persistentStore";
    import type Area           from "$lib/model/Area";
    import { areas }           from "$lib/data/areas";

    const selectedAreas = persistentStore<string[]>("selected-areas", []);

    function isSelected(area: Area): boolean {
        return $selectedAreas.includes(area.uid);
    }
</script>

<article class="prose">
    <h1>Self Assessment</h1>
    <section>
        <p>
            Being aware of your current state is crucial for tracking progress.
            Soon you will do a self-assessment of the areas you have chosen for your life.
            The table below contains questions for that would prompt some of your thinking to help you on an initial reflection.
        </p>
    </section>
    <section class="two-cols">
        {#each areas as area}
            {#if isSelected(area)}
                <section class="card bg-neutral-100">
                    <h4 class="mt-0">{area.name}</h4>
                    <ul>
                        {#each area.assessment as question}
                            <li>{question}</li>
                        {/each}
                    </ul>
                </section>
            {/if}
        {/each}
    </section>
    <section>
        <h3>Activity</h3>
        <p>Write down your areas and score them from 1 to 10, where 10 is the highest and 1 is lowest.</p>
    </section>
</article>

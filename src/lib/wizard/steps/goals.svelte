<script lang="ts">
    import TiptapEditor        from "$lib/components/TiptapEditor.svelte";
    import { areas }           from "$lib/data/areas";
    import type { Area }       from "$lib/model/Area";
    import { persistentStore } from "$lib/persistentStore";

    const selectedAreas = persistentStore<string[]>("selected-areas", []);

    function isSelected(area: Area): boolean {
        return $selectedAreas.includes(area.uid);
    }
</script>

<article class="prose">
    <h1>Set Your Goals and Milestones</h1>
    {#each areas as area}
        {#if isSelected(area)}
            <section class="two-cols">
                <header class="card">{area.name}</header>

                <div class="card bg-neutral-100">
                    <h4 class="mt-0">Goal and Milestone Examples</h4>
                    <ul>
                        {#each area.sample_goals as goal}
                            <li>{goal}</li>
                        {/each}
                    </ul>
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Big 3 Annual Goals</h4>
                    <TiptapEditor />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q1 Key Milestones</h4>
                    <TiptapEditor />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q2 Key Milestones</h4>
                    <TiptapEditor />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q3 Key Milestones</h4>
                    <TiptapEditor />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q4 Key milestones</h4>
                    <TiptapEditor />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Gauge for Success</h4>
                    <TiptapEditor />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="mt-0">Gauge for Success Examples</h4>
                    <ul>
                        {#each area.sample_success_gauges as gauge}
                            <li>{gauge}</li>
                        {/each}
                    </ul>
                </div>
            </section>
        {/if}
    {/each}
</article>

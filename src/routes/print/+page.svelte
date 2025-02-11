<script lang="ts">
    import { areas }           from "$lib/data/areas";
    import type Area           from "$lib/model/Area";
    import type AreaGoals      from "$lib/model/AreaGoals";
    import { persistentStore } from "$lib/persistentStore";
    import { onMount }         from "svelte";
    import "./print.css";

    const groupedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

    const reflection = persistentStore<string>("reflection", "");
    const selectedAreas = persistentStore<string[]>("selected-areas", []);
    const goals = persistentStore<Array<AreaGoals>>("goals", []);

    const empty = "empty :-(";

    onMount(() => {
        setTimeout(() => {
            window.print();
        }, 1000);
    });
</script>

<article class="prose">
    <h1>Your Summary</h1>
    {@html $reflection}
    {#each $goals as goal}
        {#if $selectedAreas.includes(goal.areaUid)}
            {@const area = groupedAreas.get(goal.areaUid)!}
            <section>
                <h2>{area.name}</h2>

                <p>Self-assessment: {goal.assessment}</p>

                <section>
                    <h3>Vision</h3>
                    {@html goal.vision ?? empty}
                </section>

                <section>
                    <h3>Big Why</h3>
                    {@html goal.purpose ?? empty}
                </section>

                <section>
                    <h3>Annual Goals</h3>
                    {@html goal.annual ?? empty}
                </section>

                <section>
                    <h3>Q1 Milestones</h3>
                    {@html goal.q1 ?? empty}
                </section>

                <section>
                    <h3>Q2 Milestones</h3>
                    {@html goal.q2 ?? empty}
                </section>

                <section>
                    <h3>Q2 Milestones</h3>
                    {@html goal.q2 ?? empty}
                </section>

                <section>
                    <h3>Q2 Milestones</h3>
                    {@html goal.q2 ?? empty}
                </section>

                <section>
                    <h3>Gauge for Success</h3>
                    {@html goal.gauge ?? empty}
                </section>
            </section>
        {/if}
    {/each}
</article>

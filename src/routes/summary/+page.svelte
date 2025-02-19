<script lang="ts">
    import { page }            from "$app/state";
    import type Area           from "$lib/model/Area";
    import type AreaGoals      from "$lib/model/AreaGoals";
    import type User           from "$lib/model/User";
    import { persistentStore } from "$lib/persistentStore";
    import { onMount }         from "svelte";
    import "./print.css";

    const areas = page.data.areas as Area[];
    const groupedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

    const user = persistentStore<User>("user", { firstName: "" });
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

<article class="prose print max-w-none">
    <h1>{$user.firstName}'s Summary</h1>

    {@html $reflection}

    {#each $goals as goal}
        {#if $selectedAreas.includes(goal.areaUid)}
            {@const area = groupedAreas.get(goal.areaUid)!}
            <section class="area two-cols">
                <header class="wide">
                    <h2 class="not-prose">{area.name}</h2>
                </header>

                <section class="wide">
                    <dl class="not-prose">
                        <dt>Self-assessment</dt>
                        <dd>{goal.assessment}</dd>
                    </dl>
                </section>

                <section class="wide">
                    <h3 class="not-prose">Vision</h3>
                    {@html goal.vision ?? empty}
                </section>

                <section class="wide">
                    <h3 class="not-prose">Big Why</h3>
                    {@html goal.purpose ?? empty}
                </section>

                <section class="wide">
                    <h3 class="not-prose">Gauge for Success</h3>
                    {@html goal.gauge ?? empty}
                </section>

                <section class="wide">
                    <h3 class="not-prose">Annual Goals</h3>
                    {@html goal.annual ?? empty}
                </section>

                <section>
                    <h3 class="not-prose">Q1 Milestones</h3>
                    {@html goal.q1 ?? empty}
                </section>

                <section>
                    <h3 class="not-prose">Q2 Milestones</h3>
                    {@html goal.q2 ?? empty}
                </section>

                <section>
                    <h3 class="not-prose">Q2 Milestones</h3>
                    {@html goal.q2 ?? empty}
                </section>

                <section>
                    <h3 class="not-prose">Q2 Milestones</h3>
                    {@html goal.q2 ?? empty}
                </section>
            </section>
        {/if}
    {/each}
</article>

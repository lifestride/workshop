<script lang="ts">
    import RichTextEditor            from "$lib/components/RichTextEditor.svelte";
    import { createAreaGoalUpdater } from "$lib/createAreaGoalUpdater";
    import { areas }                 from "$lib/data/areas";
    import type Area                 from "$lib/model/Area";
    import type AreaGoals            from "$lib/model/AreaGoals";
    import { persistentStore }       from "$lib/persistentStore";

    const selectedAreas = persistentStore<string[]>("selected-areas", []);
    const goals = persistentStore<Array<AreaGoals>>("goals", []);

    const groupedAreas = Object.groupBy(areas, (area: Area) => area.uid);
    const groupedGoals = areas.reduce<{ [key: string]: AreaGoals }>((accumulator, area: Area) => {
        accumulator[area.uid] = { areaUid: area.uid };
        return accumulator;
    }, {});

    goals.subscribe((data) => {
        data.forEach((goal) => {
            groupedGoals[goal.areaUid] = goal;
        });
    });

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
                    <RichTextEditor bind:content={groupedGoals[area.uid].annual} update={createAreaGoalUpdater(goals, area, "annual")} />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q1 Key Milestones</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].q1} update={createAreaGoalUpdater(goals, area, "q1")} />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q2 Key Milestones</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].q2} update={createAreaGoalUpdater(goals, area, "q2")} />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q3 Key Milestones</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].q3} update={createAreaGoalUpdater(goals, area, "q3")} />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Q4 Key milestones</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].q4} update={createAreaGoalUpdater(goals, area, "q4")} />
                </div>

                <div class="card bg-neutral-100">
                    <h4 class="m-0">Gauge for Success</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].gauge} update={createAreaGoalUpdater(goals, area, "gauge")} />
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

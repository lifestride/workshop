<script lang="ts">
    import RichTextEditor            from "$lib/components/RichTextEditor.svelte";
    import { createAreaGoalUpdater } from "$lib/createAreaGoalUpdater";
    import { areas }                 from "$lib/data/areas";
    import decoration                from "$lib/data/decoration.json";
    import type Area                 from "$lib/model/Area";
    import type AreaGoals            from "$lib/model/AreaGoals";
    import { persistentStore }       from "$lib/persistentStore";

    const groupedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

    const selectedAreas = persistentStore<string[]>("selected-areas", []);
    const goals = persistentStore<Array<AreaGoals>>("goals", []);

    const groupedGoals = areas.reduce<{ [key: string]: AreaGoals }>((accumulator, area: Area) => {
        accumulator[area.uid] = { areaUid: area.uid };
        return accumulator;
    }, {});

    goals.subscribe((data) => {
        data.forEach((goal) => {
            groupedGoals[goal.areaUid] = goal;
        });
    });
</script>

<article class="prose">
    <h1>Set Your Goals and&nbsp;Milestones</h1>
    {#each $selectedAreas as areaUid}
        {@const area = groupedAreas.get(areaUid)!}
        {@const accentColor = decoration[area.uid].accentColor}
        <section class="two-cols">
            <header class="card wide" style="background-color: {accentColor};">{area.name}</header>

            <div class="card">
                <h4>Your Vision</h4>
                {@html groupedGoals[area.uid].vision}
            </div>

            <div class="card">
                <h4>Your Big Why</h4>
                {@html groupedGoals[area.uid].purpose}
            </div>

            <div class="card">
                <h4>Gauge for Success Examples</h4>
                <ul>
                    {#each area.sample_success_gauges as gauge}
                        <li>{gauge}</li>
                    {/each}
                </ul>
            </div>

            <div class="card">
                <h4>Goal and Milestone Examples</h4>
                <ul>
                    {#each area.sample_goals as goal}
                        <li>{goal}</li>
                    {/each}
                </ul>
            </div>

            <div class="card">
                <h4>Gauge for Success</h4>
                <RichTextEditor bind:content={groupedGoals[area.uid].gauge} update={createAreaGoalUpdater(goals, area, "gauge")} />
            </div>

            <div class="card">
                <h4>Big 3 Annual Goals</h4>
                <RichTextEditor bind:content={groupedGoals[area.uid].annual} update={createAreaGoalUpdater(goals, area, "annual")} />
            </div>

            <div class="card">
                <h4>Q1 Key Milestones</h4>
                <RichTextEditor bind:content={groupedGoals[area.uid].q1} update={createAreaGoalUpdater(goals, area, "q1")} />
            </div>

            <div class="card">
                <h4>Q2 Key Milestones</h4>
                <RichTextEditor bind:content={groupedGoals[area.uid].q2} update={createAreaGoalUpdater(goals, area, "q2")} />
            </div>

            <div class="card">
                <h4>Q3 Key Milestones</h4>
                <RichTextEditor bind:content={groupedGoals[area.uid].q3} update={createAreaGoalUpdater(goals, area, "q3")} />
            </div>

            <div class="card">
                <h4>Q4 Key milestones</h4>
                <RichTextEditor bind:content={groupedGoals[area.uid].q4} update={createAreaGoalUpdater(goals, area, "q4")} />
            </div>

        </section>
    {/each}
</article>

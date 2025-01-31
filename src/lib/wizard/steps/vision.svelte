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
    <h1>Vision</h1>

    <section>
        <p>
            The&nbsp;next step would be&nbsp;for&nbsp;you to&nbsp;create a&nbsp;vision for&nbsp;what you want in&nbsp;each area of&nbsp;your
            life. This should be&nbsp;something that inspires you.
            In&nbsp;the&nbsp;grid below you will see some examples of&nbsp;people’s vision statements to&nbsp;spark your creativity.
            You&nbsp;can use them and&nbsp;edit them to&nbsp;make them fit to&nbsp;your own areas.
        </p>
        <p>Define a vision for each one of your areas.</p>
    </section>

    {#each areas as area}
        {#if isSelected(area)}
            <section class="two-cols">
                <header class="card">{area.name}</header>

                <div class="card bg-neutral-100">
                    <h4 class="mt-0">Questions</h4>
                    <ul>
                        {#each area.prompt_questions as question}
                            <li>{question}</li>
                        {/each}
                    </ul>
                </div>
                <div class="card bg-neutral-100">
                    <h4 class="mt-0">Examples</h4>
                    <ul>
                        {#each area.sample_statements as statement}
                            <li>{statement}</li>
                        {/each}
                    </ul>
                </div>

                <div class="card">
                    <h4>Your Vision</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].vision} update={createAreaGoalUpdater(goals, area, "vision")} />
                </div>
                <div class="card">
                    <h4>Your Big Why</h4>
                    <RichTextEditor bind:content={groupedGoals[area.uid].purpose} update={createAreaGoalUpdater(goals, area, "purpose")} />
                </div>
            </section>
        {/if}
    {/each}
</article>

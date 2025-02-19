<script lang="ts">
    import { page }                  from "$app/state";
    import RichTextEditor            from "$lib/components/RichTextEditor.svelte";
    import { createAreaGoalUpdater } from "$lib/createAreaGoalUpdater";
    import type Area                 from "$lib/model/Area";
    import type AreaGoals            from "$lib/model/AreaGoals";
    import { persistentStore }       from "$lib/persistentStore";

    const areas = page.data.areas as Area[];
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
    <h1>Vision</h1>

    <section>
        <p>
            The&nbsp;next step is&nbsp;to&nbsp;create a&nbsp;vision for&nbsp;what you want in&nbsp;each area of&nbsp;your life.
            This should be&nbsp;something that inspires you.
            We&nbsp;are providing prompt questions and&nbsp;examples of&nbsp;other people’s vision statements to&nbsp;spark your creativity.
            In&nbsp;your Big Why, write down the&nbsp;reasons why you <em>must</em> succeed in&nbsp;this area.
        </p>
    </section>
    <section>
        <h3>Activity</h3>

        <p>Define a&nbsp;vision for&nbsp;each one of&nbsp;your areas and&nbsp;add your Big Why.</p>
    </section>

    {#each $selectedAreas as areaUid}
        {@const area = groupedAreas.get(areaUid)!}
        {@const accentColor = page.data.decoration[area.uid].accentColor}
        <section class="two-cols">
            <header class="card wide" style="background-color: {accentColor};">{area.name}</header>

            <div class="card">
                <h4>Questions</h4>
                <ul>
                    {#each area.prompt_questions as question}
                        <li>{question}</li>
                    {/each}
                </ul>
            </div>
            <div class="card">
                <h4>Examples</h4>
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
    {/each}
</article>

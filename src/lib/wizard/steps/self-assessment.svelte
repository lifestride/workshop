<script lang="ts">
    import { areas }           from "$lib/data/areas";
    import type Area           from "$lib/model/Area";
    import type AreaGoals      from "$lib/model/AreaGoals";
    import { persistentStore } from "$lib/persistentStore";

    const groupedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

    const selectedAreas = persistentStore<string[]>("selected-areas", []);
    const goals = persistentStore<Array<AreaGoals>>("goals", []);

    const predicate = (uid: string) => (goal: AreaGoals) => goal.areaUid === uid;

    const getAssignmentValue = (area: Area) => {
        const value = $derived($goals.find(predicate(area.uid))?.assessment);
        setAssignmentValue(area, value!);
        return value;
    };

    const setAssignmentValue = (area: Area, value: number) => {
        goals.update((data) => {
            const index = data.findIndex(predicate(area.uid));

            if (index === -1) {
                data.push({ areaUid: area.uid, assessment: value });
            }
            else {
                data[index].assessment = value;
            }
            return data;
        });
    };
</script>

<article class="prose">
    <h1>Self Assessment</h1>
    <section>
        <p>
            Being aware of your current state is crucial for tracking progress.
            Soon you will do a self-assessment of the areas you have chosen for your life.
            The blocks below provide questions for that would prompt some of your thinking to help you on an initial reflection.
        </p>
    </section>
    <section class="two-cols">
        {#each $selectedAreas as areaUid}
            {@const area = groupedAreas.get(areaUid)!}
            <section class="card bg-neutral-100">
                <h4 class="mt-0">{area.name}</h4>

                <ul class="mb-5">
                    {#each area.assessment as question}
                        <li>{question}</li>
                    {/each}
                </ul>

                <p>Give yourself a score:</p>
                <input
                    type="range" min="0" max="10" step="1" class="w-full"
                    bind:value={
                        () => getAssignmentValue(area),
                        (v) => setAssignmentValue(area, v)
                    }
                />
            </section>
        {/each}
    </section>
    <section>
        <h3>Activity</h3>
        <p>Write down your areas and score them from&nbsp;1 to&nbsp;10, where 1&nbsp;is&nbsp;the&nbsp;lowest and&nbsp;10 is&nbsp;the&nbsp;highest.</p>
    </section>
</article>

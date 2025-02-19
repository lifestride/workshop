<script lang="ts">
    import { page }            from "$app/state";
    import type Area           from "$lib/model/Area";
    import type AreaGoals      from "$lib/model/AreaGoals";
    import { persistentStore } from "$lib/persistentStore";

    const areas = page.data.areas as Area[];
    const groupedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));
    const selectedAreas = persistentStore<string[]>("selected-areas", []);
    const goals = persistentStore<Array<AreaGoals>>("goals", []);

    const predicate = (uid: string) => (goal: AreaGoals) => goal.areaUid === uid;

    const getCurrentValue = (area: Area) => {
        const value = $derived($goals.find(predicate(area.uid))?.assessment ?? 0);
        return value;
    };

    const getAssignmentValue = (area: Area) => {
        const value = getCurrentValue(area);
        setAssignmentValue(area, value);
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
    <section>
        <h3>Activity</h3>

        <p>Score your areas from&nbsp;0 to&nbsp;10, where:</p>
        <ul>
            <li>0&nbsp;being, you are&nbsp;not doing any of&nbsp;the&nbsp;items in&nbsp;the&nbsp;examples.</li>
            <li>10&nbsp;being, you are&nbsp;doing all of&nbsp;them and&nbsp;on&nbsp;top of&nbsp;this area.</li>
        </ul>
        <p>Later you will have the&nbsp;chance to&nbsp;create your own gauge for&nbsp;success.</p>
    </section>
    <section class="two-cols">
        {#each $selectedAreas as areaUid}
            {@const area = groupedAreas.get(areaUid)!}
            <section class="card">
                <h4>{area.name}</h4>

                <ul class="mb-5">
                    {#each area.assessment as question}
                        <li>{question}</li>
                    {/each}
                </ul>

                <div class="slider">
                    <p>Give yourself a score:</p>
                    <input
                        type="range" min="0" max="10" step="1"
                        bind:value={
                            () => getAssignmentValue(area),
                            (v) => setAssignmentValue(area, v)
                        }
                    />
                    <output>{getCurrentValue(area)} / 10</output>
                </div>
            </section>
        {/each}
    </section>
</article>

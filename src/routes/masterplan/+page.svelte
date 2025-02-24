<script lang="ts">
    import type AreaGoals      from "$lib/model/AreaGoals";
    import { persistentStore } from "$lib/persistentStore";
    import { onMount }         from "svelte";
    import "../summary/print.css";

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
    <section class="area">
        <header class="wide">
            <h2 class="not-prose">Annual Goals</h2>
        </header>

        {#each $goals as goal}
            {#if $selectedAreas.includes(goal.areaUid)}
                {@html goal.annual}
            {/if}
        {/each}
    </section>

    <section class="area">
        <header class="wide">
            <h2 class="not-prose">Q1 Milestones</h2>
        </header>

        {#each $goals as goal}
            {#if $selectedAreas.includes(goal.areaUid)}
                {@html goal.q1}
            {/if}
        {/each}
    </section>

    <section class="area">
        <header class="wide">
            <h2 class="not-prose">Q2 Milestones</h2>
        </header>

        {#each $goals as goal}
            {#if $selectedAreas.includes(goal.areaUid)}
                {@html goal.q2}
            {/if}
        {/each}
    </section>

    <section class="area">
        <header class="wide">
            <h2 class="not-prose">Q3 Milestones</h2>
        </header>

        {#each $goals as goal}
            {#if $selectedAreas.includes(goal.areaUid)}
                {@html goal.q3}
            {/if}
        {/each}
    </section>

    <section class="area">
        <header class="wide">
            <h2 class="not-prose">Q4 Milestones</h2>
        </header>

        {#each $goals as goal}
            {#if $selectedAreas.includes(goal.areaUid)}
                {@html goal.q4}
            {/if}
        {/each}
    </section>
</article>

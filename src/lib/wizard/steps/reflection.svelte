<script lang="ts">
    import RichTextEditor      from "$lib/components/RichTextEditor.svelte";
    import type { WizardData } from "$lib/dataload";
    import { persistentStore } from "$lib/persistentStore";

    let {data}: { data: WizardData } = $props();

    const content = persistentStore<string>("reflection", "");
</script>

<article class="prose">
    <h1>Reflection</h1>
    <section>
        <p>Let’s start with&nbsp;a&nbsp;short reflection on&nbsp;your year:</p>
        <ul>
            <li>Looking back at your past year, what did you like or appreciate?</li>
            <li>What would you like to have less of or do less of based on last year experiences.</li>
            <li>What excited you last year, or what was great about last year?</li>
            <li>What would you like to have more this year, based off last year?</li>
        </ul>
    </section>
    <section>
        <h3>Activity</h3>
        <p>Reflect on&nbsp;your previous year and&nbsp;note some noteworthy events.</p>
        <RichTextEditor bind:content={$content} />
    </section>
</article>

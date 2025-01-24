<script lang="ts">
    import RichTextEditor      from "$lib/components/RichTextEditor.svelte";
    import { persistentStore } from "$lib/persistentStore";
    import { areas }           from "$lib/data/areas";
    import type { Area }       from "$lib/model/Area";

    const selectedAreas = persistentStore("selected-areas", []);

    function isSelected(area: Area): boolean {
        return $selectedAreas.includes(area.uid);
    }
</script>

<article class="prose max-w-full">
    <h1>Create Your Vision</h1>
    <p>Define a vision for each one of your areas.</p>
    {#each areas as area}
        {#if isSelected(area)}
            <section>
                <h3>{area.name}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                </div>
                <RichTextEditor />
            </section>
        {/if}
    {/each}
</article>

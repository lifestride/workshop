<script lang="ts">
    import RichTextEditor from "$lib/components/RichTextEditor.svelte";
    import { areas }      from "$lib/data/areas";
</script>

<article class="prose max-w-full">
    <h2>Create Your Vision</h2>
    <p>Define a vision for each one of your areas.</p>
    {#each areas as area}
        <section>
            <h3>{area.name}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 bg-neutral-100">
                    <h4 class="mt-0">Questions</h4>
                    <ul>
                        {#each area.prompt_questions as question}
                            <li>{question}</li>
                        {/each}
                    </ul>
                </div>
                <div class="p-4 bg-neutral-100">
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
    {/each}
</article>

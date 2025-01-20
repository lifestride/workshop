<script lang="ts">
    import { areas } from "$lib/data/areas";
</script>

<article class="prose max-w-full">
    <h1>Vision</h1>
    <section>
        <p>
            The&nbsp;next step would be&nbsp;for&nbsp;you to&nbsp;create a&nbsp;vision for&nbsp;what you want in&nbsp;each area of&nbsp;your
            life. This should be&nbsp;something that inspires you.
            In&nbsp;the&nbsp;grid below you will see some examples of&nbsp;people’s vision statements to&nbsp;spark your creativity.
            You&nbsp;can use them and&nbsp;edit them to&nbsp;make them fit to&nbsp;your own areas.
        </p>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each areas as area}
            <section class="card bg-neutral-100">
                <h4 class="mt-0">{area.name}</h4>
                <ul>
                    {#each area.sample_statements as statement}
                        <li>{statement}</li>
                    {/each}
                </ul>
            </section>
        {/each}
    </div>
</article>

<script lang="ts">
    import { goto } from "$app/navigation";

    let { steps, currentStep, navigate } = $props();

    const isAtFirstStep = () => ($currentStep === 1);
    const isAtLastStep = () => ($currentStep === steps.length);

    const previous = () => navigate($currentStep - 1);
    const next = () => navigate($currentStep + 1);

    const print = () => goto("./print");
</script>

<nav>
    {#if !isAtFirstStep()}
        <button type="button" class="back" onclick={previous}>Back</button>
    {/if}

    {#if isAtLastStep()}
        <button type="button" class="print" onclick={print}>Print</button>
    {:else}
        <button type="button" class="next" onclick={next}>Next</button>
    {/if}
</nav>

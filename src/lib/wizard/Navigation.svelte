<script lang="ts">
    let { steps, currentStep, navigate } = $props();

    const isAtFirstStep = () => ($currentStep === 1);
    const isAtLastStep = () => ($currentStep === steps.length);

    const previous = () => navigate($currentStep - 1);
    const next = () => navigate($currentStep + 1);
</script>

<nav>
    {#if !isAtFirstStep()}
        <button type="button" class="back" onclick={previous}>Back</button>
    {/if}

    {#if !isAtLastStep()}
        <button type="button" class="next" onclick={next}>Next</button>
    {/if}
</nav>

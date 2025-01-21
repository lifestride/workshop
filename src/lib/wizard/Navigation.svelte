<script lang="ts">
    let { steps, currentStep, navigate } = $props();

    function isAtFirstStep() {
        return $currentStep === 1;
    }

    function isAtLastStep() {
        return $currentStep === steps.length;
    }

    function previous() {
        navigate($currentStep - 1);
    }

    function next() {
        navigate($currentStep + 1);
    }
</script>

<nav>
    {#if !isAtFirstStep()}
        <button type="button" class="back" on:click={previous}>Back</button>
    {/if}

    {#if !isAtLastStep()}
        <button type="button" class="next" on:click={next}>Next</button>
    {/if}
</nav>

<script lang="ts">
    import StepOne from "./Step1.svelte";
    import StepTwo from "./Step2.svelte";

    const steps = [
        StepOne,
        StepTwo,
    ];

    let currentStep = $state(1);

    function isAtFirstStep() {
        return currentStep === 1;
    }

    function isAtLastStep() {
        return currentStep === steps.length;
    }

    function navigateToStep(step: number) {
        console.log("navigate-to-step:", step);
        if (step >= 1 && step <= steps.length) {
            currentStep = step;
        }
    }

    function next() {
        navigateToStep(currentStep + 1);
    }

    function previous() {
        navigateToStep(currentStep - 1);
    }

    $inspect(currentStep);
</script>

<form>
    <svelte:component this={steps[currentStep - 1]} />

    {#if !isAtFirstStep()}
        <button type="button" class="back" on:click={previous}>Back</button>
    {/if}

    {#if !isAtLastStep()}
        <button type="button" class="next" on:click={next}>Next</button>
    {/if}
</form>

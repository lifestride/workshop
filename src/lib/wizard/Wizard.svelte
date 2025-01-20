<script lang="ts">
    import Progress           from "./Progress.svelte";
    import AreasStep          from "./steps/areas.svelte";
    import SelectAreasStep    from "./steps/areas-select.svelte";
    import SelfAssessmentStep from "./steps/self-assessment.svelte";

    const steps = [
        AreasStep,
        SelectAreasStep,
        SelfAssessmentStep,
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
    <Progress {steps} {currentStep} />
    <svelte:component this={steps[currentStep - 1]} />

    <nav>
        {#if !isAtFirstStep()}
            <button type="button" class="back" on:click={previous}>Back</button>
        {/if}

        {#if !isAtLastStep()}
            <button type="button" class="next" on:click={next}>Next</button>
        {/if}
    </nav>
</form>

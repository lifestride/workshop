<script lang="ts">
    import { writable } from "svelte/store";
    import localforage  from "localforage";

    import Progress           from "./Progress.svelte";
    import ReflectionStep     from "./steps/reflection.svelte";
    import AreasStep          from "./steps/areas.svelte";
    import SelectAreasStep    from "./steps/areas-select.svelte";
    import SelfAssessmentStep from "./steps/self-assessment.svelte";
    import VisionStep         from "./steps/vision.svelte";
    import CreateVisionStep   from "./steps/vision-create.svelte";
    import GoalSettingStep    from "./steps/goal-setting.svelte";

    const steps = [
        ReflectionStep,
        AreasStep,
        SelectAreasStep,
        SelfAssessmentStep,
        VisionStep,
        CreateVisionStep,
        GoalSettingStep,
    ];

    const currentStep = writable<number>(1);

    localforage.getItem<number>("current-step").then((value) => {
        if (value !== null) currentStep.set(value);
    });

    currentStep.subscribe((value: number) => {
        localforage.setItem("current-step", value);
    });

    let Step = $derived(steps[$currentStep - 1]);

    function isAtFirstStep() {
        return $currentStep === 1;
    }

    function isAtLastStep() {
        return $currentStep === steps.length;
    }

    function navigateToStep(step: number) {
        console.log("navigate-to-step:", step);
        if (step >= 1 && step <= steps.length) {
            currentStep.set(step);
        }
    }

    function next() {
        navigateToStep($currentStep + 1);
    }

    function previous() {
        navigateToStep($currentStep - 1);
    }

    $inspect($currentStep);
</script>

<Progress {steps} {currentStep} />
<form>
    <Step />

    <nav>
        {#if !isAtFirstStep()}
            <button type="button" class="back" on:click={previous}>Back</button>
        {/if}

        {#if !isAtLastStep()}
            <button type="button" class="next" on:click={next}>Next</button>
        {/if}
    </nav>
</form>

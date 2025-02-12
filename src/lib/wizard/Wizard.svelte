<script lang="ts">
    import { persistentStore } from "$lib/persistentStore";
    import Navigation          from "$lib/wizard/Navigation.svelte";
    import Progress            from "./Progress.svelte";
    import AreasIntroStep      from "./steps/areas-introduction.svelte";
    import AreasStep           from "./steps/areas.svelte";
    import GettingStartedStep  from "./steps/getting-started.svelte";
    import GoalsIntroStep      from "./steps/goals-introduction.svelte";
    import GoalsStep           from "./steps/goals.svelte";
    import ReflectionStep      from "./steps/reflection.svelte";
    import SelfAssessmentStep  from "./steps/self-assessment.svelte";
    import VisionStep          from "./steps/vision.svelte";
    import WheelOfLife         from "./steps/wheel-of-life.svelte";

    const steps = [
        GettingStartedStep,
        ReflectionStep,
        AreasIntroStep,
        WheelOfLife,
        AreasStep,
        SelfAssessmentStep,
        VisionStep,
        GoalsIntroStep,
        GoalsStep,
    ];

    const currentStep = persistentStore<number>("current-step", 1);

    let Step = $derived(steps[$currentStep - 1]);

    function navigate(toStep: number) {
        if (toStep >= 1 && toStep <= steps.length) {
            currentStep.set(toStep);
        }
    }
</script>

<form>
    <Navigation {steps} {currentStep} {navigate} />
    <Progress {steps} {currentStep} />
    <Step />
    <Navigation {steps} {currentStep} {navigate} />
</form>

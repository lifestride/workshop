<script lang="ts">
    import { persistentStore } from "$lib/persistentStore";

    import Navigation from "$lib/wizard/Navigation.svelte";
    import Progress   from "./Progress.svelte";

    import ReflectionStep     from "./steps/reflection.svelte";
    import AreasStep          from "./steps/areas.svelte";
    import WheelOfLife        from "./steps/wheel-of-life.svelte";
    import SelectAreasStep    from "./steps/areas-select.svelte";
    import SelfAssessmentStep from "./steps/self-assessment.svelte";
    import VisionStep         from "./steps/vision.svelte";
    import CreateVisionStep   from "./steps/vision-create.svelte";
    import GoalSettingStep    from "./steps/goal-setting.svelte";

    const steps = [
        ReflectionStep,
        AreasStep,
        WheelOfLife,
        SelectAreasStep,
        SelfAssessmentStep,
        VisionStep,
        CreateVisionStep,
        GoalSettingStep,
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

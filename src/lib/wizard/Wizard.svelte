<script lang="ts">
    import { writable } from "svelte/store";
    import localforage  from "localforage";

    import Navigation from "$lib/wizard/Navigation.svelte";
    import Progress   from "./Progress.svelte";

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

    function navigate(toStep: number) {
        if (toStep >= 1 && toStep <= steps.length) {
            currentStep.set(toStep);
        }
    }
</script>

<Progress {steps} {currentStep} />
<form>
    <Step />
    <Navigation {steps} {currentStep} {navigate} />
</form>

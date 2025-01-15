<script>
    import {writable} from 'svelte/store';
    import StepOne from './Step1.svelte';
    import StepTwo from './Step2.svelte';

    const currentStep = writable(1);

    const nextStep = () => {
        currentStep.update(n => n + 1);
    };

    const prevStep = () => {
        currentStep.update(n => n - 1);
    };
</script>

{#if $currentStep === 1}
    <StepOne {nextStep} />
{:else if $currentStep === 2}
    <StepTwo {nextStep} {prevStep} />
{/if}

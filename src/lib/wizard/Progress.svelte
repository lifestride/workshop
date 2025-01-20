<script lang="ts">
    let { steps, currentStep } = $props();
</script>

<progress value="{currentStep}" max="{steps.length}"></progress>

<!--
<div class="progress-bar flex justify-between mb-6">
    {#each steps as step, i}
        <div class="step flex-1 text-center py-2 px-4 mx-1 rounded
                        {i === currentStep ? 'bg-blue-500 text-white' :
                         i < currentStep ? 'bg-green-500 text-white' : 'bg-gray-200'}">
            {step.title}
        </div>
    {/each}
</div>
-->

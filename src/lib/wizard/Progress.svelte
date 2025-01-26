<script lang="ts">
    let { steps, currentStep } = $props();
</script>

<progress value="{$currentStep}" max="{steps.length}"></progress>

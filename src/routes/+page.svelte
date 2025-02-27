<script lang="ts">
    import Wizard             from "$lib/wizard/Wizard.svelte";
    import type { PageProps } from "./$types";

    let {data}: PageProps = $props();
</script>

<header>Laife Planner Workshop</header>

<Wizard data={data} />

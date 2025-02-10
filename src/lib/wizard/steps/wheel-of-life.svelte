<script lang="ts">
    import { areas }              from "$lib/data/areas";
    import type Area              from "$lib/model/Area";
    import ApexCharts             from "apexcharts";
    import { onDestroy, onMount } from "svelte";

    let chartContainerElement: HTMLElement;
    let chart: ApexCharts;

    const labels = areas.map((area: Area) => area.name);
    const portion = Number((100 / labels.length).toFixed(1));
    const series = Array(labels.length).fill(portion);

    const chartOptions = {
        chart: {
            type: "pie",
        },
        series: series,
        labels: labels,
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
            },
        },
    };

    onMount(() => {
        chart = new ApexCharts(chartContainerElement, chartOptions);
        chart.render();
    });

    onDestroy(() => {
        if (chart) chart.destroy();
    });
</script>

<article class="prose">
    <h1>Wheel of&nbsp;Life</h1>
    <section>
        <p>
            The&nbsp;wheel of&nbsp;life is&nbsp;a&nbsp;visual tool designed to&nbsp;help individuals assess
            and&nbsp;structure their lives to&nbsp;achieve balance.
            It&nbsp;assists in&nbsp;identifying areas that require more focus and&nbsp;improvement.
        </p>
        <p>See below an&nbsp;example of&nbsp;a&nbsp;Wheel of&nbsp;Life:</p>
    </section>
    <div bind:this={chartContainerElement} id="wheel-of-life"></div>
</article>

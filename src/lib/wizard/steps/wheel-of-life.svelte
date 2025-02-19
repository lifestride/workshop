<script lang="ts">
    import { page }               from "$app/state";
    import type Area              from "$lib/model/Area";
    import ApexCharts             from "apexcharts";
    import { onDestroy, onMount } from "svelte";

    const areas = page.data.areas as Area[];

    const labels = areas.map((area: Area) => area.name);
    const portion = Number((100 / labels.length).toFixed(1));
    const series = Array(labels.length).fill(portion);
    const colors = Object.values(page.data.decoration).map(area => area.accentColor);

    let chartContainerElement: HTMLElement;
    let chart: ApexCharts;

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
        fill: {
            type: "gradient",
            // colors: colors,
        },
        responsive: [
            {
                breakpoint: 500,
                options: {
                    chart: {
                        height: 500,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
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

<script lang="ts">
    import { areas }  from "$lib/data/areas";
    import decoration from "$lib/data/decoration.json";

    const uid = "health-fitness";
    const area = areas.find(area => area.uid === uid)!;
    const accentColor = decoration[uid].accentColor;
</script>

<article class="prose">
    <h1>Goal Setting and&nbsp;Action Plans</h1>
    <section>
        <p>
            Congratulations, you have already created a&nbsp;vision for&nbsp;your areas of&nbsp;life.
            With&nbsp;a&nbsp;vision in&nbsp;place, you can now set goals for&nbsp;different areas of&nbsp;your life.
            Establish clear and&nbsp;achievable goals,
            then break them down into&nbsp;quarterly milestones to&nbsp;track your progress effectively.
        </p>
        <p>
            Below is&nbsp;an&nbsp;example of&nbsp;a&nbsp;yearly goal plan with&nbsp;quarterly milestones.
            This example may help you in&nbsp;establishing your own goals and&nbsp;milestones.
        </p>
    </section>

    <section class="two-cols">
        <header class="card wide" style="background-color: {accentColor};">{area.name}</header>

        <div class="card wide">
            <h4>Gauge for Success</h4>
            <ul>
                <li>Score 0: Poorly eating, no muscle tone, low energy.</li>
                <li>Score 10: Visible muscle tone, running without injuries, free of major illness, nutrition mostly optimal.</li>
                <li>Running logs; number of races completed.</li>
                <li>Food tracking; water intake.</li>
                <li>Dexa scans every month or quarter.</li>
                <li>Regular health check ups</li>
            </ul>
        </div>

        <div class="card wide">
            <h4>Big 3 Annual Goals</h4>
            <ul>
                <li>Maintain a healthy weight and visible muscle tone throughout the year. 15% BF Dexa Scans.</li>
                <li>Run three races (e.g., 5K or 10K) injury-free throughout the year.</li>
                <li>Adopt and sustain a clean and balanced nutrition plan- Mostly Paleo and Meet Daily protein.</li>
            </ul>
        </div>

        <div class="card">
            <h4>Q1 Key Milestones</h4>
            <ul>
                <li>Baseline Dexa scans and Initial doctor visits, Progress photos</li>
                <li>Start running program focusing on Endurance</li>
                <li>Consistently start tracking food intake, track Macros</li>
            </ul>
        </div>

        <div class="card">
            <h4>Q2 Key Milestones</h4>
            <ul>
                <li>Try out HIIT Cardio. Dexa Scan - 2%.</li>
                <li>Schedule Race for this quarter (5k)</li>
                <li>Refine Meal plan- Focus on whole foods</li>
            </ul>
        </div>

        <div class="card">
            <h4>Q3 Key Milestones</h4>
            <ul>
                <li>Integrate yoga/Pilates to improve core strength and flexibility.</li>
                <li>Train for longer races or incorporate trail runs</li>
                <li>Continue to monitor Macros.</li>
            </ul>
        </div>

        <div class="card">
            <h4>Q4 Key milestones</h4>
            <ul>
                <li>Final Race. Plan for recovery/maintenance program</li>
                <li>Dexa Scan - 3%. Progress photos</li>
                <li>Experiment new recipes. Mindful eating</li>
            </ul>
        </div>
    </section>
</article>

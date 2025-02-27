<script lang="ts">
    import type { WizardData } from "$lib/dataload";
    import type User           from "$lib/model/User";
    import { persistentStore } from "$lib/persistentStore";

    let {data}: { data: WizardData } = $props();

    const user = persistentStore<User>("user", {firstName: ""});

    const intro = () => {
        const rndIdx = Math.floor(Math.random() * data.intros.length);
        return data.intros.at(rndIdx);
    };
</script>

<article class="prose">
    <h1>Welcome</h1>

    <section>
        <p>Hi everyone.</p>
        <p>We are so excited you are taking the time to review this with us.</p>
        <p>
            The outcome of this portion of the product, is to help someone who has never set goals before,
            to be able to create areas of their life, a vision, a gauge for success, and achievable goals for each area of their life.
            The feedback we are looking for is on the actual “content” you are reading, as well as the prompt questions for each area.
        </p>
        <p>Are the questions helpful? Do you find it easy to create an area of focus for your life?</p>
        <p>During your goal-setting process, is there anything else we should include that we may have overlooked?</p>

        <div class="flex items-center justify-center w-full md:w-3/5 h-80 mx-auto my-10 border-2 border-neutral-300 rounded-lg text-center">
            <p>
                A&nbsp;video from&nbsp;Gary with&nbsp;introduction and&nbsp;guidance.<br />
                (use <a href="https://loom.com/">Loom</a> to&nbsp;record)
            </p>
        </div>
    </section>

    <section>
        <h2>Technical Information</h2>

        <h4>Data privacy and safety</h4>
        <ol>
            <li>
                This web form does not send any data to a server.
                We do not retain or have access to your data.
                Only you have access to your data as it is stored in your web browser on your computer.
            </li>
            <li>
                Web browsers provide a function to delete browsing data (or “clear site data”).
                As your data is stored in the browser, deleteing browsing data for this website will lead to the loss of your data.
            </li>
        </ol>

        <h4>Limitations and recommendations</h4>
        <ol>
            <li>It is necessary to complete the process using the same browser on the same computer.</li>
            <li>Use a proper large-screen computer to complete the form. This experience is not ideal for mobile screens.</li>
            <li>Download the PDF on the last step to preserve the results.</li>
        </ol>
    </section>

    <section>
        <p class="w-full md:w-1/2 mx-auto text-center">{@html intro()}</p>

        <input
            type="text"
            bind:value={$user.firstName}
            maxlength="16"
            placeholder="Enter your first name…"
            data-test-id="name"
            class="block w-full md:w-1/3 mx-auto p-2 border-2 border-neutral-300 rounded-lg text-3xl text-center"
        />
    </section>
</article>

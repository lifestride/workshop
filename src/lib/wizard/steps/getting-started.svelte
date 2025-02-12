<script lang="ts">
    import type User           from "$lib/model/User";
    import { persistentStore } from "$lib/persistentStore";
    import intros              from "$lib/data/intros.json";

    const user = persistentStore<User>("user", { firstName: "" });

    const intro = () => intros.at(Math.floor(Math.random() * intros.length));
</script>

<article class="prose">
    <h1>Getting Started!</h1>

    <section>
        <ol>
            <li>A brief introduction and explanation of what it all is about.</li>
            <li>
                <span>A brief and user-friendly explanation of:</span>
                <ol>
                    <li>Data privacy — we cannot retain or access the data.</li>
                    <li>Limitations — the same browser on the same computer must be used.</li>
                    <li>Data safety — data can be lost on the user side.</li>
                    <li>
                        <span>Recommendations:</span>
                        <ul>
                            <li>Use a proper large-screen computer to complete the form.</li>
                            <li>Download the PDF on the last step to preserve the results.</li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ol>

        <div class="flex items-center justify-center w-3/5 h-80 mx-auto my-10 border-2 border-neutral-300 rounded-lg text-center">
            <p>A video from Gary with introduction and guidance.<br />(use <a href="https://loom.com/">Loom</a> to record)</p>
        </div>
    </section>

    <section>
        <p class="w-1/2 mx-auto text-center">{@html intro()}</p>

        <input
            type="text"
            bind:value={$user.firstName}
            placeholder="Enter your first name…"
            class="block w-1/3 mx-auto p-2 border-2 border-neutral-300 rounded-lg text-3xl text-center"
        />
    </section>
</article>

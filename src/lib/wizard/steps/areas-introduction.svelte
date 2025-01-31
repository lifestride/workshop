<script lang="ts">
    import RichTextEditor      from "$lib/components/RichTextEditor.svelte";
    import { persistentStore } from "$lib/persistentStore";

    const content = persistentStore<string>("areas-of-life", "");

    const update = (value: string) => {
        content.set(value);
    };
</script>

<article class="prose">
    <h1>Areas of Life</h1>
    <section>
        <p>Think about the different roles you play in your life. Reflect on the following questions:</p>
        <ul>
            <li>What areas of life do you focus on the most?</li>
            <li>Are there any areas of life not serving you?</li>
            <li>How are you spending most of your time?</li>
            <li>What activities take most of your days?</li>
            <li>Are there any activities you would like not to do?</li>
            <li>Any activities that might not be serving you now?</li>
        </ul>
    </section>
    <section>
        <h3>Activity</h3>
        <p>Reflect on what you are spending most of your time right now.</p>
        <RichTextEditor {content} {update} />
    </section>
</article>

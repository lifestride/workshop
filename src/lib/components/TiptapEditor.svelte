<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { Editor }             from "@tiptap/core";
    import StarterKit             from "@tiptap/starter-kit";
    import Underline              from "@tiptap/extension-underline";
    import Link                   from "@tiptap/extension-link";
    import Placeholder            from "@tiptap/extension-placeholder";
    import BubbleMenu             from "@tiptap/extension-bubble-menu";

    let { content, update } = $props();

    let containerElement: HTMLElement;
    let bubbleMenuElement: HTMLElement;
    let editor: Editor;

    if (content) {
        content.subscribe((value: string) => {
            if (editor?.isEmpty) editor?.commands.setContent(value);
        });
    }

    onMount(() => {
        const extensions = [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Underline,
            Link,
            BubbleMenu.configure({
                element: bubbleMenuElement,
            }),
            Placeholder.configure({
                placeholder: "Start typing…",
            }),
        ];

        const editorProps = {
            attributes: {
                class: "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
            },
        };

        editor = new Editor({
            element: containerElement,
            extensions: extensions,
            editorProps: editorProps,
            content: $content,
            onUpdate: ({ editor }) => {
                if (update) update(editor.getHTML());
            },
            onTransaction: () => { // force re-render so `editor.isActive` works as expected
                editor = editor;
            },
        });
    });

    onDestroy(() => {
        if (editor) editor.destroy();
    });
</script>

<div bind:this={containerElement} class="wysiwyg"></div>
<div bind:this={bubbleMenuElement} class="wysiwyg-bubble-menu"></div>

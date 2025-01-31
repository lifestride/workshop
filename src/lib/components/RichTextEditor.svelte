<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { Editor }             from "@tiptap/core";
    import StarterKit             from "@tiptap/starter-kit";
    import Underline              from "@tiptap/extension-underline";
    import Link                   from "@tiptap/extension-link";
    import Placeholder            from "@tiptap/extension-placeholder";
    import BubbleMenu             from "@tiptap/extension-bubble-menu";

    type UpdateCallback = (editor: Editor) => void;

    let { content = $bindable(), update }: { content: string, update?: UpdateCallback } = $props();

    let element: HTMLElement;
    let bubbleMenuElement: HTMLElement;
    let editor: Editor;

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
            element,
            extensions,
            editorProps,
            content,
            onUpdate: ({ editor }) => {
                content = editor.getHTML();
                if (update) update(editor);
            },
            onTransaction: () => {
                editor = editor; // force re-render so `editor.isActive` works as expected
            },
        });

        $effect(() => {
            if (editor?.isEmpty) editor?.commands.setContent(content);
        });
    });

    onDestroy(() => {
        editor?.destroy();
    });
</script>

<div bind:this={element} class="wysiwyg"></div>
<div bind:this={bubbleMenuElement} class="wysiwyg-bubble-menu"></div>

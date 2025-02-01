import type Area      from "$lib/model/Area";
import type AreaGoals from "$lib/model/AreaGoals";
import { Editor }     from "@tiptap/core";
import type { Writable } from "svelte/store";

export function createAreaGoalUpdater(goals: Writable<AreaGoals[]>, area: Area, property: string) {
    return (editor: Editor) => goals.update((data) => {
        const updatedValue = editor.getHTML();
        const index = data.findIndex((goal) => goal.areaUid === area.uid);

        if (index === -1) {
            data.push({ areaUid: area.uid, [property]: updatedValue });
        }
        else {
            // @ts-ignore
            data[index][property] = updatedValue;
        }

        return data;
    });
}

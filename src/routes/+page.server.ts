import { areas }  from "$lib/data/areas";
import decoration from "$lib/data/decoration.json";
import intros     from "$lib/data/intros.json";
import type Area  from "$lib/model/Area";

const indexedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

export function load({ params }) {
    return {
        areas,
        decoration,
        indexedAreas,
        intros,
    };
}

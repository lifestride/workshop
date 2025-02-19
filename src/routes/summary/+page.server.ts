import { areas } from "$lib/data/areas";
import type Area from "$lib/model/Area";

const indexedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

export function load({ params }) {
    return {
        areas,
        indexedAreas,
    };
}

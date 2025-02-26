import { areas } from "$lib/data/areas";
import decoration from "$lib/data/decoration.json";
import intros from "$lib/data/intros.json";
import type Area from "$lib/model/Area";

const indexedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

/**
 * Load basic area data (used in summary and masterplan pages)
 */
export function loadAreaData() {
    return {
        areas,
        indexedAreas,
    };
}

/**
 * Load extended data including decoration and intros (used in main wizard)
 */
export function loadExtendedAreaData() {
    return {
        areas,
        decoration,
        indexedAreas,
        intros,
    };
}
import { areas }  from "$lib/data/areas";
import decoration from "$lib/data/decoration.json";
import intros     from "$lib/data/intros.json";
import type Area  from "$lib/model/Area";

export interface Decoration {
    accentColor: string;
}

export interface AreaData {
    areas: Area[];
    indexedAreas: Map<string, Area>;
}

export interface WizardData extends AreaData {
    decoration: Record<string, Decoration>;
    intros: string[];
}

const indexedAreas = new Map<string, Area>(areas.map(area => [area.uid, area]));

/**
 * Load basic area data (used in Summary and Master Plan pages)
 */
export function loadPrintData(): AreaData {
    return {
        areas,
        indexedAreas,
    };
}

/**
 * Load extended data including decoration and intros (used in main wizard)
 */
export function loadWizardData(): WizardData {
    return {
        areas,
        decoration,
        indexedAreas,
        intros,
    };
}

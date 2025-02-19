import { areas }  from "$lib/data/areas";
import decoration from "$lib/data/decoration.json";
import intros     from "$lib/data/intros.json";

export function load({ params }) {
    return {
        areas,
        decoration,
        intros,
    };
}

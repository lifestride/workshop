import { tick } from "svelte";

export default function delayedPrint() {
    const delay = 1000;

    setTimeout(() => {
        tick().then(window.print);
    }, delay);
}

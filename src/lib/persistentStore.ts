import localforage       from "localforage";
import type { Writable } from "svelte/store";
import { writable }      from "svelte/store";

const localStore = localforage.createInstance({
    name: "workshop",
    storeName: "wizard",
});

interface PersistentStore<T> extends Writable<T> {
    remove: () => void;
}

export function persistentStore<T>(key: string, initialValue?: T): PersistentStore<T> {
    const { subscribe, set, update } = writable(initialValue);

    type Mutator = (value: T) => T;

    // Load initial value from local storage on store creation
    localStore.getItem<T>(key).then((value) => {
        if (value !== null) set(value);
    }).catch(console.error);

    return {
        subscribe,
        set: (value: T) => {
            localStore.setItem(key, value)
                .then(() => set(value))
                .catch(console.error);
        },
        update: (mutator: Mutator) => {
            update(currentValue => {
                const updatedValue = mutator(currentValue);

                localStore.setItem(key, updatedValue)
                    .catch(console.error);

                return updatedValue;
            });
        },
        remove: () => {
            // Remove from local storage and reset to initial value
            localStore.removeItem(key)
                .then(() => {
                    if (initialValue) set(initialValue);
                })
                .catch(console.error);
        },
    };
}

import type { Handle } from "@sveltejs/kit";

const preloadTypes = new Set(["js", "css", "font"]);

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event, {
        preload: ({ type }) => {
            return preloadTypes.has(type);
        },
    });
    return response;
};

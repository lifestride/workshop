import { sveltekit }    from "@sveltejs/kit/vite";
import tailwindcss      from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit(),
    ],
    build: {
        chunkSizeWarningLimit: 750,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes("@tiptap")) return "tiptap";
                },
            },
        },
    },
});

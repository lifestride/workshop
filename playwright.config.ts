import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "e2e",
    timeout: 10000, // 10 seconds per test

    use: {
        testIdAttribute: "data-test-id",
    },

    webServer: {
        command: "pnpm run build && pnpm run preview",
        port: 4173,
        timeout: 60000, // 1 minute for server startup
    },
});

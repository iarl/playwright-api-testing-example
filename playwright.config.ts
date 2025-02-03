import { defineConfig } from "@playwright/test"


export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    reporter: "html",
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "vite-deploy",
  test: {
    globals: true,
    environment: "node",
    setupFiles: "./vite.config.js",
  },
});

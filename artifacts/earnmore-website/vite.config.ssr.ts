import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// SSR-only build config — no PORT/BASE_PATH checks, no dev plugins
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    ssr: "src/entry-server.tsx",
    outDir: path.resolve(import.meta.dirname, "dist/server"),
    emptyOutDir: true,
    rollupOptions: {
      // Keep React/ReactDOM as externals so the prerender script can patch
      // useSyncExternalStore on the shared node_modules instance before render.
      external: [
        "react",
        "react-dom",
        "react-dom/server",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        format: "esm",
      },
    },
  },
});

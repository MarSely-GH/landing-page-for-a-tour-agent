import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages: проект в подпапке; без этого при URL без «/» в конце ломаются ./assets/ */
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/landing-page-for-a-tour-agent/" : "/",
  plugins: [react()],
}));

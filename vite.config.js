import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Production: путь репозитория на GitHub Pages. Development: корень, чтобы открывался http://localhost:5173/ */
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/landing-page-for-a-tour-agent/" : "/",
}));

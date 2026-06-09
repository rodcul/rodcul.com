// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rodcul.com",
  redirects: {
    "/growth-engineer": "/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

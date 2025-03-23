import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  trailingSlash: "never",
  base: "/",
  site: "http://localhost:4322",
});

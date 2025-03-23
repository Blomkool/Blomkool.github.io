import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://blomkool.github.io",
  base: "/Blomkool.github.io",
  output: "static",
  trailingSlash: "always",
});

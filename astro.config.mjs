// @ts-check
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  output: "static",
  site: "https://wxiaoyun.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs({ devtools: true }),
  ],
});

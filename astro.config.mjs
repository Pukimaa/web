import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkReadingTime from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://pukima.site",
  integrations: [react(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://pukima.site/",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

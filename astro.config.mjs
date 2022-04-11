import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import turbolinks from "@astrojs/turbolinks";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pukima.site",
  integrations: [react(), turbolinks(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});

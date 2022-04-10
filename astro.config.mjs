import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import turbolinks from '@astrojs/turbolinks';

export default defineConfig({
  site: "https://pukima.site",
  integrations: [
    react(),
    turbolinks(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
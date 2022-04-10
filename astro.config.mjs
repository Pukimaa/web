import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: "https://pukima.site",
  integrations: [
    react(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://open-source-uc.github.io',
  base: 'staff',
  integrations: [tailwind()]
});

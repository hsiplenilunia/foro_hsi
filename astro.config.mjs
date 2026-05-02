import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
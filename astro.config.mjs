// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";


import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://forecastfi.io',
  integrations: [icon(), sitemap(), mdx()],
  trailingSlash: 'always',
});
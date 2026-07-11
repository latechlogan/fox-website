// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    // Runs gtag.js in a web worker so analytics doesn't block the main thread.
    // dataLayer.push calls on the main thread are forwarded into the worker.
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
  site: "https://foxfamilyelectric.com",
});
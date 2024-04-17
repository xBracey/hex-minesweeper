import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: false,
      },
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#e5e7eb",
        background_color: "#e5e7eb",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Hex Minesweeper",
        description: "A hexagonal minesweeper game",
        name: "Hex Minesweeper",
        icons: [
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/apple-icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/apple-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/apple-icon-120x120.png",
            sizes: "120x120",
            type: "image/png",
          },
          {
            src: "/apple-icon-114x114.png",
            sizes: "114x114",
            type: "image/png",
          },
          {
            src: "/apple-icon-76x76.png",
            sizes: "76x76",
            type: "image/png",
          },
          {
            src: "/apple-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/apple-icon-60x60.png",
            sizes: "60x60",
            type: "image/png",
          },
          {
            src: "/apple-icon-57x57.png",
            sizes: "57x57",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/android-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/android-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
});

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
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
});

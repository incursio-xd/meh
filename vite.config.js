import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/meh/', // important for GitHub Pages deployment
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      lib: path.resolve(__dirname, './lib'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './utils'),
    },
  },
});

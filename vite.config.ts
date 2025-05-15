import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

import vercel from 'vite-plugin-vercel';

export default defineConfig(({ mode }) => ({
  base: "/",
  plugins: [
    react(),
    vercel(), // Adaugă plugin-ul Vercel
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === 'development',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      external: ['@rollup/rollup-linux-x64-gnu'],
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg'],
}));
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true, // Adăugat pentru a șterge conținutul vechi la fiecare build
    sourcemap: mode === 'development',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html') // Adăugat pentru Vercel
      },
      external: ['@rollup/rollup-linux-x64-gnu'],
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg'],
}));
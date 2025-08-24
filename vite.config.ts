import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// supaya __dirname bisa dipakai di ESM/TypeScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  root: ".", // root project = folder repo ini
  build: {
    outDir: "dist", // hasil build ke folder dist
    emptyOutDir: true,
  },
});

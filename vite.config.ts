import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger"; // REMOVE LOVABLE
// https://vitejs.dev/config/
export default defineConfig({
  base: "/code-conquest-brian/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // mode === 'development' &&
    // componentTagger(), // REMOVE LOVABLE
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
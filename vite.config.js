import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@", replacement: "/src" },
    ],
  },
  server: {
    host: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // ESNext를 타겟으로 빌드
    },
  },
});

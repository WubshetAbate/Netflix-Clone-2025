import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/Netflix-Clone-2025/", // Important for GitHub Pages
  plugins: [react()],
});

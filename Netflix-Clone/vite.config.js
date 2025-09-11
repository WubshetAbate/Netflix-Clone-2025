import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Netflix-Clone-2025/", // 👈 VERY IMPORTANT
  plugins: [react()],
});

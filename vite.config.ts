import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": JSON.stringify(dotenv.config().parsed),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

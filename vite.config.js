import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // This makes the server accessible externally
    port: 3000, // You can specify the port you want to use
  },
  plugins: [react()],
});

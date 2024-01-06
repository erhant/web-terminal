import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [solid(), vercel()],
});

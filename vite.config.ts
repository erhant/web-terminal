import { defineConfig } from "@solidjs/start/config";
import solid from "solid-start/vite";
import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [solid({ adapter: vercel() })],
  start: { ssr: false },
});

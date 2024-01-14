import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { remarkCodeHike } from "@code-hike/mdx";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({}),
    mdx({
      remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]],
    }),
    tsconfigPaths({}),
  ],
});

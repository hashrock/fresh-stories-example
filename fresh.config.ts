import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import storiesPlugin from "https://deno.land/x/fresh_stories@0.0.11/stories-plugin.ts";

export default defineConfig({
  plugins: [storiesPlugin(), tailwind()],
});

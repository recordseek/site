// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // recordseek.com is served as static files from GitHub Pages, so every route is
    // prerendered to <route>/index.html at build time.
    // /sdk/ and /share/ are separate apps copied in by scripts/release.sh.
    prerender: { enabled: true, crawlLinks: true, filter: ({ path }: { path: string }) => !/^\/(sdk|share)(\/|$)/.test(path) },
    // GitHub Pages serves 404.html for unknown paths.
    pages: [{ path: "/404", prerender: { enabled: true, outputPath: "/404.html" } }],
  },
});

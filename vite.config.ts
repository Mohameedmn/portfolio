// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages builds are opt-in: the deploy workflow sets PAGES_BASE to the
// repository subpath the site is served under — "/portfolio/", so the site
// lives at https://mohameedmn.github.io/portfolio/. Setting PAGES_BUILD=1
// instead runs the same static build with the default base below.
// Everywhere else (local dev, the Lovable preview, and Lovable publish) neither
// variable is set, so the app keeps base "/" and the default Cloudflare/nitro
// target — nothing about the preview or the published app changes.
const DEFAULT_PAGES_BASE = "/portfolio/";
const pagesBase =
  process.env["PAGES_BASE"] || (process.env["PAGES_BUILD"] ? DEFAULT_PAGES_BASE : "");
const isPagesBuild = Boolean(pagesBase);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPagesBuild
      ? {
          // Render "/" to a static index.html at build time; the site is a
          // single public page with no per-visitor data, so one render is safe.
          pages: [{ path: "/" }],
          prerender: { enabled: true, crawlLinks: false },
        }
      : {}),
  },
  ...(isPagesBuild ? { nitro: false } : {}),
  vite: {
    base: pagesBase || "/",
  },
});

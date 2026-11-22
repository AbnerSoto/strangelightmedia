// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: served at
  // https://abnersoto.github.io/strangelightmedia/, not the domain root,
  // so every internal link needs the `/strangelightmedia` prefix (see
  // src/lib/url.ts's withBase helper). Swap to a custom domain later by
  // changing `site` to that domain, dropping `base`, and adding a
  // public/CNAME file with the domain's name in it.
  site: 'https://abnersoto.github.io',
  base: '/strangelightmedia',
});

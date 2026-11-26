import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  // served at https://camptocamp.github.io/odoolings/; keep lib/shared.ts in step.
  basePath: '/odoolings',
  trailingSlash: true,
  reactStrictMode: true,
  // Required, and silently so. Fumadocs maps markdown `![]()` to next/image, and
  // without this the export still builds but emits `/_next/image/?url=...` URLs for
  // every screenshot. There is no optimizer on static hosting, so those are 404s:
  // images work in `npm run dev` and break in production. tests/export-preview
  // asserts on this now.
  images: { unoptimized: true },
};

export default withMDX(config);

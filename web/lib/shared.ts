export const appName = 'Odoolings';
export const homeTitle = 'Odoolings: Free Odoo 19 Development Tutorial';
export const appDescription =
  'Learn Odoo 19 development for free by building a real module. Hands-on lessons cover Python, ORM, views, security, testing, OWL, and OCA practices.';
// Must match next.config.mjs's basePath (that file can't import this one: it
// loads before TypeScript transpilation is available). The site is a GitHub
// Pages project page, so everything lives under the repository's name.
export const basePath = '/odoolings';
export const siteOrigin = 'https://camptocamp.github.io';
export const siteUrl = `${siteOrigin}${basePath}`;
export const socialCard = `${basePath}/brand/odoolings-social-card-ink.png`;
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'camptocamp',
  repo: 'odoolings',
  branch: 'main',
};

export const TOTAL_CHAPTERS = 55;

/** Canonical page URLs always match Next's trailingSlash export setting. */
export function canonicalUrl(path = '/') {
  const route = path.startsWith('/') ? path : `/${path}`;
  const normalizedRoute = route === '/' ? route : `${route.replace(/\/$/, '')}/`;

  return `${siteUrl}${normalizedRoute}`;
}

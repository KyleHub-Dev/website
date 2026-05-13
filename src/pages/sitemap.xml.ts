import type { APIRoute } from 'astro';

export const prerender = true;

const SITE = 'https://kylehub.dev';

const routes: Array<{ path: string; priority: number; changefreq: string }> = [
  { path: '/',                       priority: 1.0, changefreq: 'monthly' },
  { path: '/impressum',              priority: 0.4, changefreq: 'yearly'  },
  { path: '/datenschutz',            priority: 0.4, changefreq: 'yearly'  },
  { path: '/agb',                    priority: 0.4, changefreq: 'yearly'  },
  { path: '/en/',                    priority: 0.9, changefreq: 'monthly' },
  { path: '/en/impressum',           priority: 0.4, changefreq: 'yearly'  },
  { path: '/en/privacy-policy',      priority: 0.4, changefreq: 'yearly'  },
  { path: '/en/terms',               priority: 0.4, changefreq: 'yearly'  },
];

const today = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = () => {
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        (r) =>
          `  <url>\n` +
          `    <loc>${SITE}${r.path}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${r.changefreq}</changefreq>\n` +
          `    <priority>${r.priority.toFixed(1)}</priority>\n` +
          `  </url>`,
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

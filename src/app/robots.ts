import type { MetadataRoute } from 'next';

import { siteIdentity } from '@infra/config/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteIdentity.url}/sitemap.xml`,
  };
}

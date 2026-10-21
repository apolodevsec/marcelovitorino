import type { MetadataRoute } from 'next';

import { siteIdentity } from '@infra/config/site-config';

/**
 * O site tem uma única rota; as seções são âncoras dentro dela.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteIdentity.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

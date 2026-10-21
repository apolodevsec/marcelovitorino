import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { siteIdentity } from '@infra/config/site-config';
import { SiteFooter } from '@ui/components/layout/site-footer';
import { SiteHeader } from '@ui/components/layout/site-header';

import { fontClassNames } from './fonts';

import '@ui/styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.url),
  title: siteIdentity.title,
  description: siteIdentity.description,
  openGraph: {
    title: siteIdentity.title,
    description: siteIdentity.description,
    type: 'website',
    locale: siteIdentity.openGraphLocale,
    url: siteIdentity.url,
    siteName: siteIdentity.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteIdentity.title,
    description: siteIdentity.description,
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/**
 * Casca de todas as páginas: fontes, estilos, cabeçalho e rodapé.
 */
export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang={siteIdentity.locale} className={fontClassNames}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

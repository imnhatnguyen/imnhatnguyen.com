import { Metadata } from 'next';

import '@/styles/globals.css';

import Navbar from '@/components/layouts/Navbar';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: '@masonjnguyen',
  },
  authors: [
    {
      name: 'Mason Nguyen',
      url: 'https://masonjnguyen.com',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-dark bg-white dark:text-white'>
        <Navbar />
        <main className='body-width mb-10 mt-12'>{children}</main>
      </body>
    </html>
  );
}

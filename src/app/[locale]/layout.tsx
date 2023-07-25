import '../globals.css';
import type { Metadata } from 'next';
import {useLocale} from 'next-intl';

import React from 'react';
import { redirect } from 'next/navigation';
import { calSans, inter } from '../fonts';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@/components/context/themeproviders';
import {getTranslator} from 'next-intl/server';

export async function generateMetadata({params: { locale }}: {params: { locale: string }}) {
  const t = await getTranslator(locale, 'MetadataHome');
  if(!t) {
    return {
      title: 'Lordkisx Portfolio',
      description:
        'All about lordksix. About, projects and contact information.',
      twitter: {
        card: 'summary_large_image',
        title: 'Lordkisx Portfolio',
        description:
          'All about lordksix. About, projects and contact information.',
        creator: '@wapasquel',
      },
      metadataBase: new URL('https://lordksix-portfolio.vercel.app'),
      author: 'Created by @lordksix at github',
    };
  }
  return {
    title: t('title'),
    description: t('description'),
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      creator: "@wapasquel",
    },
    metadataBase: new URL("https://lordksix-portfolio.vercel.app"),
    author: t('author'),
  };

}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    redirect('/');
  }
  return (
    <html lang={locale}>
      <head>
        <Analytics />
      </head>
      <body className={`dark:bg-black text-sky-900 min-h-screen w-screen dark:text-white ${[inter.variable, calSans.variable].join(" ")}`} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

import '../globals.css';
import {useLocale} from 'next-intl';
import Particles from '@/components/home/particles';
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
      <body className={`bg-gradient-to-tl dark:from-black from-sky-600/70 via-sky-200/20 dark:via-zinc-600/20 to-sky-600/70 dark:to-black min-h-screen w-screen dark:text-white ${[inter.variable, calSans.variable].join(" ")}`} suppressHydrationWarning={true}>
        <Providers>
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}

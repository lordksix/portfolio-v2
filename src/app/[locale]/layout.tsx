import '../globals.css';
import type { Metadata } from 'next';
import {useLocale} from 'next-intl';

import React from 'react';
import { redirect } from 'next/navigation';
import { calSans, inter } from '../fonts';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        {children}
      </body>
    </html>
  );
}

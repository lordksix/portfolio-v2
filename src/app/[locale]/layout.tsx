import '../globals.css';
import type { Metadata } from 'next';
import {useLocale} from 'next-intl';
import { Inter } from 'next/font/google';
import React from 'react';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

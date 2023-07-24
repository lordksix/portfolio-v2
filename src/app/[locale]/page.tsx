import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>{t('title')}</h1>;
    </main>
  )
}

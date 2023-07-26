import Footer from "@/components/home/footer/footer";
import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('About');
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="z-10 text-3xl text-transparent duration-1000 cursor-default bg-sky-700 dark:bg-white text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text ">
          {t('title')}
        </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in">
        <h2>
          <p className="text-lg font-extrabold sm:text-xl md:text-2xl">Wladimir P.</p>
          <p className="sm:text-lg">{t('subtitle')}</p>
        </h2>
      </div>
      <div className="flex flex-col w-9/12 mx-auto my-10 animate-fade-in sm:grid sm:grid-cols-2 sm:gap-x-10">
        <div>
          <p>{t('descrip1')}</p>
          <br />
          <p>{t('descrip2')}</p>
        </div>
        <div>
          <p>{t('language')}</p>
          <p>{t('framework')}</p>
          <p>{t('skill')}</p>
        </div>
      </div>
      <Footer />
    </main>
  )
};

export default AboutPage;

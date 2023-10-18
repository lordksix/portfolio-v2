import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import DarkModeButton from '@/components/shared/themeselector';
import Footer from '@/components/home/footer/footer';

const Hero = () => {
  const t = useTranslations('Home');
  const n = useTranslations('Navbar');
  const navigation = [
    { text: n('about'), path: "/about" },
    { text: n('projects'), path: "/projects" },
    { text: n('contact'), path: "/contact" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen md:h-screen">
      <nav className="mt-4 mb-4 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="duration-500 sm:text-lg hover:underline font-bold hover:text-[#414ec7] dark:hover:text-[#408f44]"
            >
              {item.text}
            </Link>
          ))}
          <DarkModeButton />
        </ul>
      </nav>
      <div className="my-2 text-center animate-fade-in">
        <h2>
          <p className="sm:text-lg text-[#414ec7] dark:text-[#408f44]">{t('welcome')}</p>
          <p className="text-xl font-extrabold sm:text-2xl md:text-3xl">{t('title')}</p>
          <p className="sm:text-lg text-[#414ec7] dark:text-[#408f44]">{t('subtitle')}</p>
        </h2>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <h1 className="z-10 text-5xl text-transparent duration-1000 cursor-default bg-[#414ec7] dark:bg-[#408f44]  text-edge-outline dark:text-edge-outline-dark animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        lordksix
      </h1>

      <div className="my-2 text-center animate-fade-in">
        <h2>
          <p className="text-xl font-extrabold sm:text-2xl md:text-3xl text-[#414ec7] dark:text-[#408f44]">{t('welcome2')}</p>
        </h2>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="w-10/12 text-base text-center sm:text-lg animate-fade-in max-w-4xl">
        <p>
          {t('descrip1')}
        </p>
        <p>
          {t('descrip2')}
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Hero;

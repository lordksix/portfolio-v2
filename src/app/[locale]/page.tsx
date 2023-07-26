import Footer from '@/components/home/footer/footer';
import HeaderData from '@/components/home/header/HeaderData';
import DarkModeButton from '@/components/shared/themeselector';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function Home() {
  const t = useTranslations('Home');
  const n = useTranslations('Navbar');
  const navigation = [
    { text: n('about'), path: "/about" },
    { text: n('projects'), path: "/projects" },
    { text: n('contact'), path: "/contact" },
  ];

  return (
    <>
      <HeaderData show={false} links={navigation} />
      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <nav className="my-10 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="duration-500 sm:text-lg hover:underline"
              >
                {item.text}
              </Link>
            ))}
            <DarkModeButton />
          </ul>
        </nav>
        <div className="my-12 text-center animate-fade-in">
          <h2>
            <p className="text-lg font-extrabold sm:text-xl md:text-2xl">{t('title')}</p>
            <p className="sm:text-lg">{t('subtitle')}</p>
          </h2>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
        <h1 className="z-10 text-5xl text-transparent duration-1000 cursor-default bg-sky-900 dark:bg-white text-edge-outline dark:text-edge-outline-dark animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          lordksix
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
        <div className="w-10/12 my-16 text-sm text-center sm:text-base animate-fade-in">
          <h2>
            {t('descrip1')}
          </h2>
        </div>
        <Footer />
      </main>
    </>

  );
}

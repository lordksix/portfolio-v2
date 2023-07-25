import Footer from '@/components/home/footer/footer';
import Particles from '@/components/home/particles';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function Home() {
  const t = useTranslations('Home');
  const n = useTranslations('Navbar');
  const navigation = [
    { name: n('about'), href: "/about" },
    { name: n('projects'), href: "/projects" },
    { name: n('contact'), href: "/contact" },
  ];
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl dark:from-black from-sky-600/70 via-sky-200/20 dark:via-zinc-600/20 to-sky-600/70 dark:to-black">
      <nav className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="duration-500 sm:text-lg hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="my-12 text-center animate-fade-in">
        <h2>
          <p className="text-lg font-extrabold sm:text-xl md:text-2xl">{t('title')}</p>
          <p className="sm:text-lg">{t('subtitle')}</p>
        </h2>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-5xl text-transparent duration-1000 cursor-default bg-sky-700 dark:bg-white text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        lordksix
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-sm text-center sm:text-base animate-fade-in">
        <h2>
          {t('descrip1')}
        </h2>
      </div>
      <Footer />
    </main>
  );
}

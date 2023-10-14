import Footer from '@/components/home/footer/footer';
import AccordionDemo from '@/components/shared/accordion';
import Tooltipsimple from '@/components/shared/tooltipsimple';
import { useTranslations } from 'next-intl';
import { FaJava } from 'react-icons/fa6';
import {
  SiTypescript, SiPython, SiJavascript, SiPhp, SiRuby, SiPostgresql, SiMongodb,
  SiHtml5, SiCss3, SiDjango, SiReact, SiVite, SiNextdotjs, SiBootstrap, SiTailwindcss,
  SiRubyonrails, SiNodedotjs, SiGit, SiGithub, SiWebpack, SiJest, SiMocha, SiLinux,
} from 'react-icons/si';
import { getTranslator } from 'next-intl/server';

export async function generateMetadata({params: { locale }}: {params: { locale: string }}) {
  const t = await getTranslator(locale, 'MetadataAbout');
  if(!t) {
    return {
      title: 'About',
      description:
        'Information about lordksix.'
    };
  }
  return {
    title: t('title'),
    description: t('description'),
  };
}

const AboutPage = () => {
  const t = useTranslations('About');
  const languages = (
    <div className="flex flex-wrap gap-2">
      <Tooltipsimple content="TypeScript"><SiTypescript className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="JavaScript"><SiJavascript className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Python."><SiPython className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Java"><FaJava className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="PHP"><SiPhp className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Ruby"><SiRuby className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="PostgreSQL"><SiPostgresql className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="MongoDB"><SiMongodb className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="HTML5"><SiHtml5 className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="CSS3"><SiCss3 className="w-8 h-8"/></Tooltipsimple>
    </div>
  );
  const frameworks = (
    <div className="flex flex-wrap gap-2">
      <Tooltipsimple content="Django"><SiDjango className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="React"><SiReact className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Vite"><SiVite className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Next.JS"><SiNextdotjs className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Bootstrap"><SiBootstrap className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="TailwindCSS"><SiTailwindcss className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Ruby on Rails"><SiRubyonrails className="w-8 h-8"/></Tooltipsimple>
    </div>
  );
  const skills = (
    <div className="flex flex-wrap gap-2">
      <Tooltipsimple content="NodeJS"><SiNodedotjs className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Git"><SiGit className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="GitHub"><SiGithub className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Webpack"><SiWebpack className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Jest"><SiJest className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Mocha"><SiMocha className="w-8 h-8"/></Tooltipsimple>
      <Tooltipsimple content="Linux"><SiLinux className="w-8 h-8"/></Tooltipsimple>
    </div>
  );
  const items: AccordionData[] = [
    {
      header: t('language'),
      value:"item-1",
      content: languages,
      classItem: '',
      classTrigger: '',
      classContent: '',
    },
    {
      header: t('framework'),
      value:"item-2",
      content: frameworks,
      classItem: '',
      classTrigger: '',
      classContent: '',
    },
    {
      header: t('skill'),
      value:"item-3",
      content: skills,
      classItem: '',
      classTrigger: '',
      classContent: '',
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen pt-24 pb-10 overflow-hidden sm:pt-10">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
        <h1 className="z-10 text-3xl text-transparent duration-1000 cursor-default bg-sky-700 dark:bg-white text-edge-outline animate-title font-display dark:text-edge-outline-dark sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text ">
          {t('title')}
        </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="my-6 animate-fade-in">
        <h2>
          <p className="text-lg font-extrabold text-center sm:text-xl md:text-2xl ">Wladimir P.</p>
          <p className="text-center sm:text-lg ">{t('subtitle')}</p>
        </h2>
      </div>
      <div className="flex flex-col w-8/12 mx-auto my-8 gap-y-8 animate-fade-in sm:grid sm:grid-cols-2 sm:gap-x-14 sm:gap-y-0">
        <div className="flex flex-col justify-center text-center sm:text-start">
          <p>{t('descrip1')}</p>
          <br />
          <p>{t('descrip1_1')}</p>
          <br />
          <p>{t('descrip1_2')}</p>
          <br />
          <p>{t('descrip2')}</p>
          <br />
          <p>{t('call_action')}</p>
        </div>
        <div>
            <AccordionDemo accordionItems={items} />
        </div>
      </div>
      <Footer />
    </main>
  )
};

export default AboutPage;

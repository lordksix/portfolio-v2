import Footer from "@/components/home/footer/footer";
import AccordionDemo from "@/components/shared/accordion";
import Tooltip from "@/components/shared/tooltip";
import { useTranslations } from 'next-intl';
import { FaJava } from 'react-icons/fa6';
import {
  SiTypescript, SiPython, SiJavascript, SiPhp, SiRuby, SiPostgresql, SiMongodb,
  SiHtml5, SiCss3, SiDjango, SiReact, SiVite, SiNextdotjs, SiBootstrap, SiTailwindcss,
  SiRubyonrails, SiNodedotjs, SiGit, SiGithub, SiWebpack, SiJest, SiMocha, SiLinux,
} from "react-icons/si";

const AboutPage = () => {
  const t = useTranslations('About');
  const languages = (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="TypeScript"><SiTypescript className="w-8 h-8"/></Tooltip>
      <Tooltip content="JavaScript"><SiJavascript className="w-8 h-8"/></Tooltip>
      <Tooltip content="Python."><SiPython className="w-8 h-8"/></Tooltip>
      <Tooltip content="Java"><FaJava className="w-8 h-8"/></Tooltip>
      <Tooltip content="PHP"><SiPhp className="w-8 h-8"/></Tooltip>
      <Tooltip content="Ruby"><SiRuby className="w-8 h-8"/></Tooltip>
      <Tooltip content="PostgreSQL"><SiPostgresql className="w-8 h-8"/></Tooltip>
      <Tooltip content="MongoDB"><SiMongodb className="w-8 h-8"/></Tooltip>
      <Tooltip content="HTML5"><SiHtml5 className="w-8 h-8"/></Tooltip>
      <Tooltip content="CSS3"><SiCss3 className="w-8 h-8"/></Tooltip>
    </div>
  );
  const frameworks = (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Django"><SiDjango className="w-8 h-8"/></Tooltip>
      <Tooltip content="React"><SiReact className="w-8 h-8"/></Tooltip>
      <Tooltip content="Vite"><SiVite className="w-8 h-8"/></Tooltip>
      <Tooltip content="Next.JS"><SiNextdotjs className="w-8 h-8"/></Tooltip>
      <Tooltip content="Bootstrap"><SiBootstrap className="w-8 h-8"/></Tooltip>
      <Tooltip content="TailwindCSS"><SiTailwindcss className="w-8 h-8"/></Tooltip>
      <Tooltip content="Ruby on Rails"><SiRubyonrails className="w-8 h-8"/></Tooltip>
    </div>
  );
  const skills = (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="NodeJS"><SiNodedotjs className="w-8 h-8"/></Tooltip>
      <Tooltip content="Git"><SiGit className="w-8 h-8"/></Tooltip>
      <Tooltip content="GitHub"><SiGithub className="w-8 h-8"/></Tooltip>
      <Tooltip content="Webpack"><SiWebpack className="w-8 h-8"/></Tooltip>
      <Tooltip content="Jest"><SiJest className="w-8 h-8"/></Tooltip>
      <Tooltip content="Mocha"><SiMocha className="w-8 h-8"/></Tooltip>
      <Tooltip content="Linux"><SiLinux className="w-8 h-8"/></Tooltip>
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
      <div className="flex flex-col w-8/12 mx-auto my-8 animate-fade-in sm:grid sm:grid-cols-2 sm:gap-x-10">
        <div className="flex flex-col justify-center">
          <p>{t('descrip1')}</p>
          <br />
          <p>{t('descrip2')}</p>
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

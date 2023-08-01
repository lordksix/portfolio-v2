import Footer from '@/components/home/footer/footer';
import processData from '@/components/projects/process-project-data';
import ProjectSwiper from '@/components/projects/project-swiper';
import { mockData } from '@/util/constants';
import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';
import { ReactNode } from 'react';

type processedData = {
  name: ReactNode,
  description: ReactNode,
  url: string[],
  snapshot: string,
  techtag: ReactNode,
}

export async function generateMetadata({params: { locale }}: {params: { locale: string }}) {
  const t = await getTranslator(locale, 'MetadataProjects');
  if(!t) {
    return {
      title: 'Projects',
      description:
        'Different projects by lordksix.'
    };
  }
  return {
    title: t('title'),
    description: t('description'),
  };
}

const ProjectPage = () => {
  const t = useTranslations('Projects');
  const processedData = processData(mockData, t('projectName'), t('projectDescrip'), 'techtag', [t('liveDemo'), t('github')]);
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen pt-24 pb-10 overflow-hidden sm:pt-16">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
        <h1 className="z-10 text-3xl text-transparent duration-1000 cursor-default bg-sky-700 dark:bg-white text-edge-outline animate-title font-display dark:text-edge-outline-dark sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text ">
          {t('title')}
        </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="my-6 text-center animate-fade-in">
        <h2>{t('description')}</h2>
      </div>
      <div className="w-11/12 my-6 animate-fade-in md:w-10/12">
        <h3 className='w-full text-4xl font-bold text-center'>{t('star')}</h3>
        <ProjectSwiper data={processedData} />
      </div>
      <div className="w-8/12 my-6 animate-fade-in md:w-9/12 lg:w-8/12">
        <h3 className='font-bold'>{t('extra')}</h3>
        <div>
            <p>Proyectos</p>
        </div>
      </div>
      <Footer />
    </main>
  )
};

export default ProjectPage;

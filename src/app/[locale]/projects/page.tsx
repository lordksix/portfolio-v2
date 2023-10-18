import Footer from '@/components/home/footer/footer';
import ProjectWrapper from '@/components/projects/ProjectWrapper';
import { getTranslator } from 'next-intl/server';

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


const ProjectPage = async () => {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen pt-24 pb-10 overflow-hidden sm:pt-16">
      <ProjectWrapper />
      <Footer />
    </main>
  )
};

export default ProjectPage;

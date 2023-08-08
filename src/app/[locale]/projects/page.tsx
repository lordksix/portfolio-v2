import Footer from '@/components/home/footer/footer';
import ProjectCard from '@/components/projects/projectcard';
import clientPromise from '@/lib/db/mongodb';
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
  const client = await clientPromise;
  const projectsCollection = client.db(process.env.DB_NAME).collection<projectData>(process.env.MONGO_PROJECTS_COLLECTION as string);
  const projectDataPromise = projectsCollection.find({});
  const projectData = [];
  for await (const doc of projectDataPromise) {
    projectData.push(doc);
  }
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen pt-24 pb-10 overflow-hidden sm:pt-16">
      <ProjectCard data={projectData} />
      <Footer />
    </main>
  )
};

export default ProjectPage;

import HeaderData from '@/components/home/header/HeaderData';
import Hero from '@/components/home/Hero';
import ProjectWrapper from '@/components/projects/ProjectWrapper';
import { useTranslations } from 'next-intl';

const Home = () => {
  const n = useTranslations('Navbar');
  const links = [
    { text: n('about'), path: "/about" },
    { text: n('projects'), path: "/projects" },
    { text: n('contact'), path: "/contact" },
  ];
  return (
    <>
      <HeaderData show={false} links={links} />
      <main className="flex flex-col items-center justify-center w-screen min-h-screen pt-10 overflow-hidden">
        <Hero />
        <br />
        <ProjectWrapper justCard={true}/>
      </main>
    </>

  );
};

export default Home;

import { useTranslations } from 'next-intl';
import HeaderData from '@/components/home/header/HeaderData';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const n = useTranslations('Navbar');
  const navigation = [
    { text: n('about'), path: "/about" },
    { text: n('projects'), path: "/projects" },
    { text: n('contact'), path: "/contact" },
  ];
  return (
    <>
      <HeaderData show={true} links={navigation} />
      {children}
    </>
  )
}

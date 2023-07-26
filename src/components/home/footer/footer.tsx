import React from 'react';
import { useTranslations } from 'next-intl';
import { FaSquareTwitter, FaLinkedin, FaMedium, FaGithub, FaAngellist } from "react-icons/fa6";
import LanguageDropdown from '../../shared/languageDropdown';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('Home');
  const c = useTranslations('Common');
  return (
    <footer className="w-10/12 animate-fade-in md:w-8/12">
      <div className="flex justify-between">
        <div>
          <p className="text-sm sm:text-base">{t('conect')}</p>
          <div className="flex justify-start gap-2">
            <Link href={'https://twitter.com/wapasquel'}>
              <FaSquareTwitter className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:hover:text-black dark:hover:bg-white"/>
            </Link>
            <Link href={'https://www.linkedin.com/in/wladpasquel/'}>
              <FaLinkedin className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:hover:text-black dark:hover:bg-white"/>
            </Link>
            <Link href={'https://medium.com/@wladimir.pasquel/'}>
              <FaMedium className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:hover:text-black dark:hover:bg-white"/>
            </Link>
            <Link href={'https://github.com/lordksix/'}>
              <FaGithub className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:hover:text-black dark:hover:bg-white"/>
            </Link>
            <Link href={'https://wellfound.com/u/wpasquel/'}>
              <FaAngellist className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:hover:text-black dark:hover:bg-white"/>
            </Link>
          </div>
        </div>
        <LanguageDropdown language={c('language')}/>
      </div>
    </footer>
  )
};

export default Footer;

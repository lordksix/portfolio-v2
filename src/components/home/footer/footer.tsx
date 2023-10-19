import React from 'react';
import { useTranslations } from 'next-intl';
import { FaSquareTwitter, FaLinkedin, FaMedium, FaGithub, FaAngellist } from "react-icons/fa6";
import LanguageDropdown from '../../shared/languageDropdown';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('Home');
  const c = useTranslations('Common');
  return (
    <footer className="w-10/12 py-4 animate-fade-in md:w-8/12">
      <div className="flex justify-between">
        <div>
          <p className="text-sm sm:text-base font-black text-[#414ec7] dark:text-[#408f44]">{t('connect')}</p>
          <div className="flex justify-start gap-2 text-[#414ec7] dark:text-[#408f44]">
            <Link href={'https://twitter.com/wapasquel'} rel="noreferrer" target="_blank">
              <FaSquareTwitter className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:bg-white active:scale-90 dark:hover:text-white dark:hover:bg-[#408f44]"/>
            </Link>
            <Link href={'https://www.linkedin.com/in/wladpasquel/'} rel="noreferrer" target="_blank">
              <FaLinkedin className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:bg-white active:scale-90 dark:hover:text-white dark:hover:bg-[#408f44]"/>
            </Link>
            <Link href={'https://medium.com/@wladimir.pasquel/'} rel="noreferrer" target="_blank">
              <FaMedium className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:bg-white active:scale-90 dark:hover:text-white dark:hover:bg-[#408f44]"/>
            </Link>
            <Link href={'https://github.com/lordksix/'} rel="noreferrer" target="_blank">
              <FaGithub className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:bg-white active:scale-90 dark:hover:text-white dark:hover:bg-[#408f44]"/>
            </Link>
            <Link href={'https://wellfound.com/u/wpasquel/'} rel="noreferrer" target="_blank">
              <FaAngellist className="w-8 h-8 hover:bg-sky-900 hover:text-white dark:bg-white active:scale-90 dark:hover:text-white dark:hover:bg-[#408f44]"/>
            </Link>
          </div>
        </div>
        <LanguageDropdown language={c('language')}/>
      </div>
    </footer>
  )
};

export default Footer;

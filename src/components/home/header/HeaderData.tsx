'use client';

import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Suspense } from 'react'
import useScroll from '@/lib/hooks/use-scroll';
import Image from 'next/image';
import { useMenuModal } from './MenuModal';
import LoadingData from '../../shared/loadingData';
import { useRouter } from 'next/navigation';
import { GoHomeFill } from 'react-icons/go';
import DarkModeButton from '@/components/shared/themeselector';


type Props = {
  show: boolean,
  links: {
    path: string;
    text: string;
  }[],
}

const HeaderData = ({ show = false, links }: Props) => {
  const scrolled = useScroll(50);
  const router = useRouter();
  const { MenuModal, setShowMenuModal } = useMenuModal();

  const returnBtn = (
    <button type="button" className="flex items-center justify-center hover:text-blue-500 active:scale-90" onClick={() => router.back()}  title="goback">
      <FaChevronLeft />
    </button>
  );
  const logo = (
    <div className="flex items-center gap-1">
      <Link href="/" className="flex flex-wrap items-center active:scale-90 justify-center gap-1 px-2 py-1 rounded-md hover:text-white/90 hover:bg-sky-900 dark:hover:text-black dark:hover:bg-white/90">
        <GoHomeFill />
        <Image
          src="/lordksix-logos_transparent.png"
          alt="lordksix logo"
          width="100"
          height="30"
          className="rounded-sm bg-sky-900 dark:bg-black"
        >
        </Image>
      </Link>
      <DarkModeButton />
    </div>

  );
  const burgerBtnMenuModal = (
    <button
    className="rounded-full border border-gray-800 dark:border-gray-200 bg-sky-900 active:scale-90 dark:bg-white p-1.5 px-4 text-sm text-white dark:text-black transition-all hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
    onClick={() => setShowMenuModal(true)}
  >
    <GiHamburgerMenu />
  </button>
  );

  return (
    <>
      <Suspense fallback={<LoadingData />}>
        <MenuModal {...links} />
        <header
          className={`fixed animate-fade-in top-0 w-full flex justify-center px-4 sm:px-8 md:px-12 ${
            scrolled
              ? "border-b border-gray-600  dark:border-gray-200 bg-white/50 dark:bg-black/50 backdrop-blur-xl"
              : "bg-white/0 dark:bg-black/0"
          } z-30 transition-all`}
        >
          <div className="flex items-center justify-between w-full h-16 max-w-screen-xl">
              {returnBtn}
              {show && logo}
              <div className="flex gap-2 sm:gap-6">
                {burgerBtnMenuModal}
              </div>
          </div>
        </header>
      </Suspense>
    </>
  );
}

export default HeaderData;

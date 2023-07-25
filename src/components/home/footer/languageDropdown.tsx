'use client';

import { useState } from 'react';
import Popover from '@/components/shared/popover';
import Link from 'next-intl/link';

type Props = {
  language: string
}

export default function LanguageDropdown({ language }: Props) {
  const [openPopover, setOpenPopover] = useState(false);


  return (
    <div className="relative flex items-center text-left">
      <Popover
        content={
          <div className="w-full p-2 rounded-md bg-slate-700 dark:bg-slate-400">
            <Link
              className="relative flex items-center justify-center w-full p-2 space-x-2 text-sm text-left transition-all duration-75 rounded-md dark:hover:text-black hover:bg-gray-500 dark:hover:bg-gray-200 text-white/90 dark:text-black"
              href="/" locale="en"
            >
              <p className="text-sm">English</p>
            </Link>
            <Link
              className="relative flex items-center justify-center w-full p-2 space-x-2 text-sm text-left transition-all duration-75 rounded-md dark:hover:text-black hover:bg-gray-500 dark:hover:bg-gray-200 text-white/90 dark:text-black"
              href="/" locale="es"
            >
              <p className="text-sm">Español</p>
            </Link>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex items-center justify-center w-8 h-8 overflow-hidden transition-all duration-75 border rounded-full border-sky-900 hover:bg-sky-900 hover:text-white dark:border-gray-300 focus:outline-none active:scale-95 sm:h-9 sm:w-9 dark:hover:bg-gray-300 dark:hover:text-black"
        >
          {language}
        </button>
      </Popover>
    </div>
  );
}

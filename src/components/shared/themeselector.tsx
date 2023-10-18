'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} className="flex items-center justify-start w-6 h-6 bg-transparent rounded active:scale-90 text-[#414ec7] hover:bg-[#414ec7] hover:text-white dark:text-[#408f44] dark:hover:bg-white">
        {theme === 'dark' ? <FaMoon className="w-4 h-4 mx-auto"/> : <FaSun className="w-4 h-4 mx-auto"/>}
    </button>
  );
};

export default DarkModeButton;

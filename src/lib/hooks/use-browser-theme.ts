import { useEffect, useState } from "react";

export default function useBrowserTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const mqListener = ((e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
});

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []); // Empty array ensures that effect is only run on mount

  return {
    isDarkTheme,
  };
}

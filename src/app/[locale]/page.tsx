import Particles from '@/components/home/particles';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function Home() {
  const t = useTranslations('Home');
  const n = useTranslations('Navbar');
  const navigation = [
    { name: n('about'), href: "/about" },
    { name: n('projects'), href: "/projects" },
    { name: n('contact'), href: "/contact" },
  ];
  return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl dark:from-black from-sky-600/70 via-sky-200/20 dark:via-zinc-600/20 to-sky-600/70 dark:to-black">
			<nav className="my-12 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="duration-500 hover:underline"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
      <div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg">
					<p className="text-xl font-extrabold dark:text-sky-300">{t('title')}</p>
          <p>{t('subtitle')}</p>
				</h2>
			</div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 cursor-default bg-sky-700 dark:bg-white text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				lordksix
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2>
					{t('descrip1')}
				</h2>
			</div>
		</div>
  )
}

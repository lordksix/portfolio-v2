import Modal from '@/components/shared/modal';
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from 'next/image';
import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';
import LinksBtnGen from './LinksBtnGen';


type Props = {
  showMenuModal: boolean,
  setShowMenuModal: Dispatch<SetStateAction<boolean>>,
  links: {
    path: string,
    text: string,
  }[],
}

const MenuModal = ({
  showMenuModal,
  setShowMenuModal,
  links,
}: Props) => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <Modal showModal={showMenuModal} setShowModal={setShowMenuModal}>
      <div className="w-full mx-auto overflow-hidden shadow-xl lg:max-w-md lg:rounded-2xl lg:border lg:border-gray-200">
        <div className="flex flex-col items-center justify-center px-4 py-6 pt-8 space-y-3 text-center border-b border-gray-200 bg-gradient-to-tl dark:from-zinc-500/70 dark:to-zinc-500/70 from-sky-600/70 via-sky-400/50 dark:via-zinc-700/70 to-sky-600/70 dark:text-black dark:bg-gray-400 lg:px-16">
          <Link href="/" className="flex flex-wrap items-center justify-center gap-4">
            <GoHomeFill className="dark:text-white" />
            <Image
              src="/lordksix-logos_transparent.png"
              alt="lordksix logo"
              width="67"
              height="20"
              className="w-32 h-10 mr-2 rounded-sm bg-sky-900/80 dark:bg-transparent"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-center w-full px-4 py-8 space-y-4 align-middle bg-gradient-to-tl from-sky-600/80 via-sky-400/60 to-sky-600/80 dark:from-zinc-600/70 dark:to-zinc-600/70 dark:via-zinc-700/70 lg:px-16">
          <LinksBtnGen links={links} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        </div>
      </div>
    </Modal>
  );
};

export function useMenuModal() {
  const [showMenuModal, setShowMenuModal] = useState(false);

  const MenuModalCallback = useCallback((links: any[]) => {
    return (
      <MenuModal
        links={Object.values(links)}
        showMenuModal={showMenuModal}
        setShowMenuModal={setShowMenuModal}
      />
    );
  }, [showMenuModal, setShowMenuModal]);

  return useMemo(
    () => ({ setShowMenuModal, MenuModal: MenuModalCallback }),
    [setShowMenuModal, MenuModalCallback],
  );
}

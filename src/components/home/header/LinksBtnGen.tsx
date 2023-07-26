import { LoadingDots } from '@/components/shared/icons';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  links: {
    path: string,
    text: string,
  }[],
  menuClicked: boolean,
  setMenuClicked: Dispatch<SetStateAction<boolean>>,
}

const LinksBtnGen = ({ links, menuClicked, setMenuClicked }: Props) => {
  const router = useRouter();
  const linkBtns = (
    links.map((link) => (
      <button
        key={uuidv4()}
        disabled={menuClicked}
        className={`${
          menuClicked
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border border-gray-200 bg-white text-black hover:bg-gray-100"
        } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
        onClick={() => {
          setMenuClicked(false);
          router.push(link.path);
        }}
      >
          {menuClicked ? (
            <LoadingDots color="#808080" />
          ) : (
            <>{link.text}</>
          )}
      </button>
    ))
  );
  return (
    <>
      {linkBtns}
    </>
  )
}

export default LinksBtnGen

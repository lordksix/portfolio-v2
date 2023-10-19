import Link from 'next/link';
import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SiGithub } from 'react-icons/si';
import { VscLiveShare } from 'react-icons/vsc';

type processedData = {
  name: ReactNode,
  description: ReactNode,
  url: ReactNode,
  snapshot: string,
  techtag: ReactNode,
}

const processBullet = (element: string[]) => {
  const techNode: ReactNode = (
    <>
      {element.map((elem) => (
        <span
          key={uuidv4()}
          className="px-2 py-1 font-medium text-yellow-400 rounded bg-[#414ec7] hover:bg-sky-700 dark:bg-[#408f44] dark:text-white dark:hover:bg-gray-300 dark:hover:text-[#408f44]"
        >
          {elem}
        </span>
      ))}
    </>
  );
  return techNode;
};

const processLinks = (element: string[], elementTag: string[]) => {
  const urlNode: ReactNode = (
    <>
      {element.map((elem, i) => (
        <Link
          key={uuidv4()}
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-between gap-2 px-2 py-2 font-medium text-white rounded bg-sky-900 hover:bg-sky-700 dark:bg-white dark:text-black dark:hover:bg-gray-300"
          href={elem}
        >
          {i === 0 ? <VscLiveShare className="w-8 h-8"/> : <SiGithub className="w-8 h-8"/>}
          {elementTag[i]}
        </Link>
      ))}
    </>
  );
  return urlNode;
};

const processData = (data: projectData[], name: string, description: string, techtag: string, urlName: string[]) => {
  const processedData: processedData[] = [];
   data.forEach((dataElement, i) => {
    const elementName: ReactNode = (
      <h4 className="flex flex-col text-3xl font-semibold tracking-wide text-red-600 cursor-default">
        {dataElement[name as keyof projectData]}
      </h4>
    );
    const elementDescrip: ReactNode = (
      <p className="w-8/12 mx-auto text-justify cursor-default sm:w-11/12 font-semibold text-[#fb8500] bg-gray-200/75 dark:bg-transparent dark:text-[#ffb703]">
        {dataElement[description as keyof projectData]}
      </p>
    );
    const elementTechTag: ReactNode = (
      <div className="grid w-10/12 grid-cols-2 mx-auto text-sm text-justify cursor-pointer sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
        {processBullet(dataElement[techtag as keyof projectData] as string[])}
      </div>
    );
    const elementURL: ReactNode = (
      <div className="flex flex-col w-full gap-2 text-sm cursor-default sm:flex-row sm:justify-around">
        {processLinks(dataElement.url, urlName)}
      </div>
    );
    processedData[i] = {
      name: elementName,
      description: elementDescrip,
      techtag: elementTechTag,
      url: elementURL,
      snapshot: dataElement.snapshot,
    };
  });
  return processedData;
}

export default processData;

import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

type processedData = {
  name: ReactNode,
  description: ReactNode,
  url: string,
  repo: string,
  snapshot: string,
  techtag: ReactNode,
}

const processTechtag = (techtag: string[]) => {
  const techNode: ReactNode = (
    <>
      {techtag.map((tag) => (
        <span
          key={uuidv4()}
          className="px-2 py-1 text-white rounded bg-sky-900 hover:bg-sky-700 dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          {tag}
        </span>
      ))}
    </>
  );
  return techNode;
}
const processData = (data: projectData[], name: string, description: string, techtag: string) => {
  const processedData: processedData[] = [];
   data.forEach((dataElement, i) => {
    const elementName: ReactNode = (
      <h4 className="text-4xl font-semibold tracking-wide flex flex-col cursor-default text-[#F7AB0A]/70">
        {dataElement[name as keyof projectData]}
      </h4>
    );
    const elementDescrip: ReactNode = (
      <p className="text-lg text-justify cursor-default">
        {dataElement[description as keyof projectData]}
      </p>
    );
    const elementTechTag: ReactNode = (
      <div className="text-lg text-justify cursor-default">
        {processTechtag(dataElement[techtag as keyof projectData] as string[])}
      </div>
    );
    processedData[i] = {
      name: elementName,
      description: elementDescrip,
      techtag: elementTechTag,
      url: dataElement.url,
      snapshot: dataElement.snapshot,
      repo: dataElement.repo,
    };
  });
  return processedData;
}

export default processData;

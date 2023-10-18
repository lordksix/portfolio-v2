import clientPromise from '@/lib/db/mongodb';
import React from 'react'
import ProjectCard from './projectcard';
import { Document } from 'mongodb';

type Props = {
  query?: Document
};

const ProjectWrapper = async ({ query }: Props) => {
  const client = await clientPromise;
  const projectsCollection = client.db(process.env.DB_NAME).collection<projectData>(process.env.MONGO_PROJECTS_COLLECTION as string);
  const projectDataPromise = projectsCollection.find(query || {});
  const projectData = [];
  for await (const doc of projectDataPromise) {
    projectData.push(doc);
  }
  return (
    <ProjectCard data={projectData} />
  )
}

export default ProjectWrapper

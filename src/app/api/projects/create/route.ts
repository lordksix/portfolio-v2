import clientPromise from '@/lib/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    if(!secret) throw new Error('Invalid token');
    if (secret !== process.env.MY_SECRET_TOKEN) {
      return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
          status: 401,
          statusText: 'Unauthorized',
          headers: {
              'Content-Type': 'application/json'
          }
      })
    }
    const dataJson = (await req.json()) as projectData;
    const { nameEN, nameES } = dataJson;
    const client = await clientPromise;
    const projectsCollection = client.db(process.env.DB_NAME).collection(process.env.MONGO_PROJECTS_COLLECTION as string);
    const projectDocument = await projectsCollection.findOne({$or: [{ nameEN },{ nameES }]});
    if (projectDocument) throw new Error('Project already exists');
    const project = await projectsCollection.insertOne({
      ...dataJson
    });

    return new NextResponse(
      JSON.stringify({
        status: "success",
        data: { project: { ...project } },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
      status: 400,
      statusText: 'Invalid Request',
      headers: {
          'Content-Type': 'application/json'
      }
    })
  } finally {
    (await clientPromise).close();
  }
}

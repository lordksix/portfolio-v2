import clientPromise from '@/lib/db/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    const id = req.nextUrl.searchParams.get('id');
    if(!id || !secret) throw new Error('Missing minim params');
    if (secret !== process.env.MY_SECRET_TOKEN) {
      return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
          status: 401,
          statusText: 'Unauthorized',
          headers: {
              'Content-Type': 'application/json'
          }
      })
    }
    const filter = { _id: new ObjectId(id) };
    const client = await clientPromise;
    const projectsCollection = client.db(process.env.DB_NAME).collection<projectData>(process.env.MONGO_PROJECTS_COLLECTION as string);
    const projectDocument = await projectsCollection.findOneAndDelete(filter);
    if (!projectDocument) throw new Error('Project not found, please create a new project');

    return new NextResponse(
      JSON.stringify({
        status: "success",
        data: projectDocument,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 400,
      statusText: 'Invalid Request',
      headers: {
          'Content-Type': 'application/json'
      }
    })
  }
}

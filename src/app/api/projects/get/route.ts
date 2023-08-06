import clientPromise from '@/lib/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    const name = req.nextUrl.searchParams.get('name');
    if(!name || !secret ) throw new Error('Missing minim params');
    if (secret !== process.env.MY_SECRET_TOKEN) {
      return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
          status: 401,
          statusText: 'Unauthorized',
          headers: {
              'Content-Type': 'application/json'
          }
      })
    }
    const client = await clientPromise;
    const projectsCollection = client.db(process.env.DB_NAME).collection(process.env.MONGO_PROJECTS_COLLECTION as string);
    const projectDocument = projectsCollection.find({ $or: [{ nameEN: name }, { nameES: name }] });
    if (!projectDocument) throw new Error('Project does not exist');

    return new NextResponse(
      JSON.stringify({
        status: "success",
        data: { ...projectDocument },
      }),
      {
        status: 201,
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

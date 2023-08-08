import clientPromise from '@/lib/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    let name = req.nextUrl.searchParams.get('name');
    if(!name || !secret ) throw new Error('Missing minim params');
    name = name.replace('_', ' ');
    console.log(name)
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
    const query = { $or: [{ nameEN: name }, { nameES: name }] };
    console.log(query)
    const projectDocument = await projectsCollection.findOne(query);
    if (!projectDocument) throw new Error('Project does not exist');

    return new NextResponse(
      JSON.stringify({
        status: "success",
        data: projectDocument ,
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

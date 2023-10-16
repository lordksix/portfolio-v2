import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

type GetParams = {
  params: {
    filename: string;
  };
};

// export an async GET function. This is a convention in NextJS
export async function GET(req: Request, { params }: GetParams) {
  // filename for the file that the user is trying to download
  const filename = params.filename;

  const s3 = new S3Client(
    {
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY as string,
      },
      region: process.env.AWS_S3_REGION as string,
    }
  );
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET as string,
    Key: `${process.env.AWS_BUCKET_FOLDER as string}/${filename}.pdf`,
  });

  const response = await s3.send(command);
  // use fetch to get a response
  console.log(response);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.Body?.transformToWebStream(), {
    headers: {
      "content-disposition": `attachment; filename="${filename}.pdf"`,
    },
  });
}

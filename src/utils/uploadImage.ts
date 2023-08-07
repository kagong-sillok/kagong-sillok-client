import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY as string,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY as string,
});

export const myBucket = new AWS.S3({
  params: { Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string },
  region: process.env.NEXT_PUBLIC_AWS_REGION as string,
});

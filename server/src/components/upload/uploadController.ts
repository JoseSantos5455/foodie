import multer from 'multer';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { format } from 'util';
import { NextFunction, Request, Response } from 'express';
import { apps } from 'firebase-admin';

interface MulterRequest extends Request {
  file: any;
}

const formattedPrivateKey = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');

async function configureBucketCors() {
  await getStorage().bucket().setCorsConfiguration([
    {
      origin: ['http://localhost:3000'],
        responseHeader: ['Content-Type'],
        method: ['GET', 'POST'],
        maxAgeSeconds: 3600,
    },
  ]);
}

configureBucketCors().catch(console.error);

if (!apps.length) {
  initializeApp({
    credential: cert({
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: formattedPrivateKey,
    }),
    storageBucket: 'bunny-b4362.appspot.com',
  });
}




const bucket = getStorage().bucket()

export const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export async function uploadImage(req: MulterRequest, res: Response, next: NextFunction): Promise<any> {
  if (!req.file) {
    res.status(200).json({ msg: 'No file submitted' });
    return;
  }

  try {
    const blob = bucket.file(req.file.originalname);
    
    const blobStream = blob.createWriteStream();

    blobStream.on('err', (err) => next(err));

    blobStream.on('finish', () => {
      const publicUrl = format(
        `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`,
      );
      res.status(200).send(publicUrl);
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    console.log(err.message);
  }
}

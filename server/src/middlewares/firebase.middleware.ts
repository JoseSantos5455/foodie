import multer from 'multer';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage} from 'firebase-admin/storage';
import { format } from 'util';
import {Request, NextFunction, Response } from 'express';
import { apps } from 'firebase-admin';
import { PRIVATE_KEY, PROJECT_ID, CLIENT_EMAIL, STORAGE_BUCKET } from '@/config';
import { MulterRequest } from '@/types/types';
import product from '@/components/products/product';
import { refFromURL } from '@/helpers/utils';




const formattedPrivateKey = PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!apps.length) {
  initializeApp({
    credential: cert({
      projectId: PROJECT_ID,
      clientEmail: CLIENT_EMAIL,
      privateKey: formattedPrivateKey,
    }),
    storageBucket: STORAGE_BUCKET,
  });
}

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




const bucket = getStorage().bucket()

export const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export async function upload(req: MulterRequest, res: Response, next: NextFunction): Promise<any> {
  if (!req.file.category && !req.file) {
    res.status(404).json({ msg: 'No image file submitted' });
    return;
  }
  if(req.file.category && !req.file) return next()

  try {
    const blob = bucket.file(req.file.originalname);

    const blobStream = blob.createWriteStream();

    blobStream.on('err', (err) => next(err));

    blobStream.on('finish', () => {

      const publicUrl = format(
        `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`,
      );
      req.file.firebaseUrl = publicUrl;
      next()

    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    next(err)
  }
}

export async function deleteFile(req: Request, res: Response, next : NextFunction){
  try {
    const {id} = req.params
    const {image } = await product.findOne({id}).select('image')
    const ref = refFromURL(image)
    await bucket.file(ref).delete()

    return next()
  } catch (err) {
    next(err)
  }
}

import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { Router } from 'express';
import { uploader, uploadImage } from './uploadController';

const router = Router();

router.route('/').post(isAuthenticated, isAdmin, uploader.single('file'), uploadImage);

export default router;

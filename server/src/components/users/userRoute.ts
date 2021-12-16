import { isAuthenticated, isAdmin } from '@/middlewares/auth.middleware';
import { Router } from 'express';
import adminController from './adminController';
import userController from './userController';

const router = Router();

router
  .route('/profile')
  .get(isAuthenticated, userController.getProfile)
  .patch(isAuthenticated, userController.updateProfile);
router.route('/signup').post(userController.signUp);
router.route('/signin').post(userController.signIn);
router.route('/').get(isAuthenticated, isAdmin, adminController.getUsers);
router
  .route('/:email')
  .get(isAuthenticated, isAdmin, adminController.getUserByEmail)
  .delete(isAuthenticated, isAdmin, adminController.deleteUser);

export default router;

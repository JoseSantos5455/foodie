import { isAuthenticated, isAdmin } from '@/middlewares/auth.middleware';
import { upload, uploader } from '@/middlewares/firebase.middleware';
import { Routes } from '@/types/routes.interface';
import { Router } from 'express';
import adminController from './adminController';
import userController from './userController';

class UserRoute implements Routes {
  public path = '/users/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}profile`)
      .get(isAuthenticated, userController.getProfile)
      .patch(isAuthenticated, userController.updateProfile);
    this.router
      .route(`${this.path}avatar`)
      .patch(isAuthenticated, uploader.single('image'), upload, userController.uploadAvatar);
    this.router.route(`${this.path}signup`).post(userController.signUp);
    this.router.route(`${this.path}signin`).post(userController.signIn);
    this.router.route(this.path).get(isAuthenticated, isAdmin, adminController.getUsers);
    this.router
      .route(`${this.path}:email`)
      .get(isAuthenticated, isAdmin, adminController.getUserByEmail)
      .delete(isAuthenticated, isAdmin, adminController.deleteUser);
  }
}

export default UserRoute;

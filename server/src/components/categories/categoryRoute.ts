import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { isValidCategory } from '@/middlewares/category.middleware';
import { upload, uploader } from '@/middlewares/firebase.middleware';
import { Routes } from '@/types/routes.interface';
import { Router } from 'express';
import categoryController from './categoryController';

class CategoryRoute implements Routes {
  public path = '/category/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(this.path).get(categoryController.getParentCategories).post(isAuthenticated, isAdmin, uploader.single('image'), isValidCategory, upload, categoryController.addCategory);
    this.router.route(`${this.path}:id`).delete(isAuthenticated, isAdmin, categoryController.deleteCategory);
  }
}

export default CategoryRoute;

import { makeResJson } from '@/helpers/utils';
import { MulterRequest } from '@/types/types';
import { NextFunction, Request, Response } from 'express';
import categoryService from './categoryService';

class CategoryController {
  async addCategory(req: MulterRequest, res: Response, next: NextFunction) {
    try {
      const createdCategory = await categoryService.addCategory(req.body, req.file.firebaseUrl);
      res.status(200).json(makeResJson(createdCategory));
    } catch (err) {
      next(err);
    }
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryService.getAllCategories('name slug descendents parent');
      res.status(200).json(makeResJson(categories));
    } catch (err) {
      next(err);
    }
  }

  async getParentCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryService.getParentCategories();
      res.status(200).json(makeResJson(categories));
    } catch (err) {
      next(err);
    }
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedCategoryId = await categoryService.deleteCategory(req.params.id);
      res.status(200).json(makeResJson(deletedCategoryId));
    } catch (err) {
      next(err);
    }
  }
}

export default new CategoryController();

import { NextFunction, Response } from 'express';
import { ErrorHandler } from './error.middleware';
import { MulterRequest } from '@/types/types';
import { ICategory } from '@/types/category.interface';

const isValidCategory = async (req: MulterRequest, res: Response, next: NextFunction) => {
  try {
    const category: ICategory = req.body;
    if (category.parent === null && !req.file) {
      return next(new ErrorHandler(400, 'Category image is needed for main category'));
    }
    if (category.name) {
      req.file.category = true;
      return next();
    }

    return next(new ErrorHandler(400, 'missing category name'));
  } catch (err) {
    return next(err);
  }
};

export { isValidCategory };

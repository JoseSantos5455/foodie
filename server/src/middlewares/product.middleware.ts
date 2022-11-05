import { NextFunction, Response } from 'express';
import { ErrorHandler } from './error.middleware';
import { MulterRequest } from '@/types/types';
import { IProduct } from '@/types/products.interface';
const isValidProduct = async (req: MulterRequest, res: Response, next: NextFunction) => {
  try {
    const product: IProduct = req.body;
    if (
      product.title &&
      product.description &&
      product.details &&
      product.pricing.originalPrice &&
      product.category &&
      product.countInStock
    )
      return next();

    return next(new ErrorHandler(400, 'missing required product fields'));
  } catch (err) {
    return next(err);
  }
};

export { isValidProduct };

import { makeResJson } from '@/helpers/utils';
import { NextFunction, Request, Response } from 'express';
import productService from './productsService';

class ProductController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const createdProduct = await productService.addProduct(req.body);
      return res.status(200).json(makeResJson(createdProduct));
    } catch (err) {
      next(err);
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { products } = await productService.getProducts('title');
      return res.status(200).json(makeResJson(products));
    } catch (err) {
      next(err);
    }
  }

  //   async getProductBySlug(req: Request, res: Response) {
  //     const product = await productService.getProductBySlug(req.params.slug);
  //     res.status(200).json(product);
  //   }
}

export default new ProductController();

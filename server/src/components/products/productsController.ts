import { makeResJson } from '@/helpers/utils';
import { ErrorHandler } from '@/middlewares/error.middleware';
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
      const { products } = await productService.getProducts('title rating slug image pricing');
      return res.status(200).json(makeResJson(products));
    } catch (err) {
      next(err);
    }
  }

  async getProductBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProductBySlug(req.params.slug);
      res.status(200).json(makeResJson(product));
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedProductId = await productService.deleteProduct(req.params.id);
      res.status(200).json(makeResJson(deletedProductId));
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedProduct = await productService.updateProduct(req.params.slug, req.body);
      res.status(200).json(makeResJson(updatedProduct));
    } catch (err) {
      next(err);
    }
  }

  async seachByTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const searchProducts = await productService.searchByTitle(req.params.title);
      res.status(200).json(makeResJson(searchProducts));
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductController();

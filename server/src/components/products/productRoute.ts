import { Router } from 'express';
import productController from './productsController';

const router = Router();

router.route('/').get(productController.getProducts).post(productController.addProduct);

export default router;

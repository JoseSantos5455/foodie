import { Router } from 'express';
import productController from './productsController';

const router = Router();

router.route('/').get(productController.getProducts).post(productController.addProduct);
router.route('/:slug').get(productController.getProductBySlug).patch(productController.updateProduct);
router.route('/:id').delete(productController.deleteProduct);

export default router;

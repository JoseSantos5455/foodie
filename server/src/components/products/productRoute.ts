import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { Router } from 'express';
import productController from './productsController';

const router = Router();

router.route('/').get(productController.getProducts).post(isAuthenticated, isAdmin, productController.addProduct);
router
  .route('/:slug')
  .get(productController.getProductBySlug)
  .patch(isAuthenticated, isAdmin, productController.updateProduct);
router.route('/:id').delete(isAuthenticated, isAdmin, productController.deleteProduct);

export default router;

import { Router } from 'express';
import categoryController from './categoryController';

const router = Router();

router.route('/').get(categoryController.getCategories).post(categoryController.addCategory);
router.route('/:id').delete(categoryController.deleteCategory);

export default router;

import { isAuthenticated } from '@/middlewares/auth.middleware';
import { isReviewOwner } from '@/middlewares/middleware';
import { Router } from 'express';
import reviewController from './reviewController';

const router = Router();

router.route('/:slug').post(isAuthenticated, reviewController.addReview);
router
  .route('/:id')
  .delete(isAuthenticated, isReviewOwner, reviewController.deleteReview)
  .patch(isAuthenticated, isReviewOwner, reviewController.editReview);

router.route('/:product').get(reviewController.getProductReviews);

export default router;

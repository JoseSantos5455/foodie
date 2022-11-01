import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { isAllowedToReview, isReviewOwner } from '@/middlewares/middleware';
import { Routes } from '@/types/routes.interface';
import { Router } from 'express';
import reviewController from './reviewController';

class ReviewRoute implements Routes {
  public path = '/reviews/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(`${this.path}`).get(isAuthenticated, isAdmin, reviewController.getAllReviews);
    this.router.route(`${this.path}:slug`).post(isAuthenticated, isAllowedToReview, reviewController.addReview);
    this.router
      .route(`${this.path}:id`)
      .delete(isAuthenticated, isReviewOwner, reviewController.deleteReview)
      .patch(isAuthenticated, isReviewOwner, reviewController.editReview);

    this.router.route(`${this.path}:product`).get(reviewController.getProductReviews);
  }
}

export default ReviewRoute;

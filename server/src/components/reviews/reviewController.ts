import { makeResJson } from '@/helpers/utils';
import { NextFunction, Request, Response } from 'express';
import reviewService from './reviewService';

class ReviewController {
  async getAllReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const reviews = await reviewService.getAllReviews();
      res.status(200).json(makeResJson(reviews));
    } catch (err) {
      next(err);
    }
  }

  async addReview(req: Request, res: Response, next: NextFunction) {
    try {
      const newReview = await reviewService.addReview(req.body, req.params.slug, req.user._id);
      res.status(200).json(makeResJson(newReview));
    } catch (err) {
      return next(err);
    }
  }

  async deleteReview(req: Request, res: Response, next: NextFunction) {
    try {
      const delReviewId = await reviewService.deleteReview(req.params.id);
      res.status(200).json(makeResJson(delReviewId));
    } catch (err) {
      return next(err);
    }
  }

  async editReview(req: Request, res: Response, next: NextFunction) {
    try {
      const review = await reviewService.editReview(req.body, req.params.id);
      res.status(200).json(makeResJson(review));
    } catch (err) {
      return next(err);
    }
  }

  async getProductReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const reviews = await reviewService.getProductReviews(req.params.product);
      res.status(200).json(makeResJson(reviews));
    } catch (err) {
      return next(err);
    }
  }

  async adminDeleteReview(req: Request, res: Response, next: NextFunction) {
    try {
      const delReviewId = await reviewService.deleteReview(req.params.id);
      res.status(200).json(makeResJson(delReviewId));
    } catch (err) {
      return next(err);
    }
  }
}

export default new ReviewController();

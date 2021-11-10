import { Request, NextFunction, Response } from 'express';
import { ErrorHandler } from './error.middleware';
import Review from '@/components/reviews/review';

const isReviewOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return next(new ErrorHandler(404, 'Review not found'));
    if (req.user._id.toString() === review?.userId.toString()) {
      return next();
    } else {
      return next(new ErrorHandler(401, 'you do not have permission to delete this review'));
    }
  } catch (err) {
    return next(err);
  }
};

export { isReviewOwner };

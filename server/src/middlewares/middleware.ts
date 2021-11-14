import { Request, NextFunction, Response } from 'express';
import { ErrorHandler } from './error.middleware';
import Review from '@/components/reviews/review';
import User from '@/components/users/user';
import Product from '@/components/products/product';
import Category from '@/components/categories/category';

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

const isAllowedToReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.user._id).select('orders');
    if (!user) return next(new ErrorHandler(404, 'user not found'));

    const product = await Product.findOne({ slug: req.params.slug }).select('slug');

    if (!product) return next(new ErrorHandler(404, 'product does not exist'));

    if (user.orders.some((order) => order.toString() === product._id.toString())) {
      return next();
    } else {
      return next(new ErrorHandler(403, 'you have to buy the product to review'));
    }
  } catch (err) {
    return next(err);
  }
};

export { isReviewOwner, isAllowedToReview };

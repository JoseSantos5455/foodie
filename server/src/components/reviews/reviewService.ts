import Review from './review';
import { ErrorHandler } from '@/middlewares/error.middleware';
import Product from '../products/product';
import { IUser } from '@/types/user.interface';
import { IProduct } from '@/types/products.interface';
import { IReview } from '@/types/review.interface';
class ReviewService {
  async getAllReviews(): Promise<IReview[]> {
    try {
      const reviews = await Review.find().populate('productId', 'title image pricing.originalPrice');
      if (reviews.length === 0) throw new ErrorHandler(404, 'no review was found');
      return reviews;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
  async addReview(review: IReview, productSlug: string, userId: IUser['_id']): Promise<IReview> {
    try {
      const { userName, comment, rating } = review;
      if (!userName || !comment || !rating) {
        throw new ErrorHandler(400, 'all review field are required');
      }

      const product = await Product.findOne({ slug: productSlug })
        .populate('reviews')
        .select('numReview rating reviews');

      if (!product) {
        throw new ErrorHandler(404, 'product not found');
      }

      const alreadyReviewed = product.reviews.find((r) => r.userId.toString() === userId.toString());

      if (alreadyReviewed) {
        throw new ErrorHandler(400, 'you already reviewed this product');
      }

      const newReview = await Review.create({
        userName,
        comment,
        rating,
        productId: product._id,
        userId,
      });

      if (newReview) {
        const productReviews = await Review.find({ productId: product._id });
        product.numReviews = productReviews?.length;
        const reviewsRating = (
          productReviews.reduce((acc, item) => item.rating + acc, 0) / productReviews.length
        ).toFixed(1);

        product.rating = Number(reviewsRating);

        await product.save();
      }

      return newReview;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async deleteReview(reviewId: IReview['_id']): Promise<IReview['_id']> {
    try {
      const review = await Review.findOneAndDelete(reviewId);

      if (!review) {
        throw new ErrorHandler(404, 'No review was found');
      }
      const reviewedProduct = await Product.findById(review.productId).populate('reviews').select('numReviews rating');

      if (!reviewedProduct) {
        throw new ErrorHandler(404, 'No product containing this review was found');
      }

      if (review._id) {
        reviewedProduct.numReviews = reviewedProduct.reviews?.length;
        const reviewsRating = (
          reviewedProduct.reviews?.reduce((acc, item) => item?.rating + acc, 0) / reviewedProduct.reviews?.length
        ).toFixed(1);
        reviewedProduct.rating = reviewedProduct.reviews?.length > 0 ? Number(reviewsRating) : 0;

        await reviewedProduct.save();
      }

      return review._id;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async editReview(edits: Partial<IReview>, reviewId: IReview['_id']): Promise<IReview> {
    try {
      const review = await Review.findByIdAndUpdate(reviewId, edits, { new: true });
      if (!review) {
        throw new ErrorHandler(404, 'No review was found');
      }

      return review;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async getProductReviews(productId: IProduct['_id']): Promise<IReview[]> {
    try {
      const reviews = await Review.find({ productId });
      if (!reviews) {
        throw new ErrorHandler(404, 'no reviews where found');
      }
      return reviews;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async adminDeleteReview(reviewId: IReview['_id']): Promise<IReview['_id']> {
    try {
      const review = await Review.findByIdAndDelete(reviewId);
      if (!review) {
        throw new ErrorHandler(404, 'No review was found');
      }
      return review._id;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new ReviewService();

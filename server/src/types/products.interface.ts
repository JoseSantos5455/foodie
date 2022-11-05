import { Document } from 'mongoose';
import { ICategory } from './category.interface';
import { IReview } from './review.interface';

export interface IProduct extends Document {
  title: string;
  description: string;
  details: string;
  slug: string;
  image: string;
  subImages: string[];
  brand: string;
  pricing: { originalPrice: number; discountPercentage: number };
  countInStock: number;
  sold: number;
  rating: number;
  numReviews: number;
  size: string;
  color: string;
  specs: {
    countryOfProduction: string;
    weight: number;
    model: string;
  };
  category: ICategory['_id'];
  reviews: IReview[];
}

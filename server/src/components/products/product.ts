import { Schema, model, Document } from 'mongoose';
import slugify from 'slugify';
import { ICategory } from '../categories/category';
import { IReview } from '../reviews/review';

const ObjectId = Schema.Types.ObjectId;

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

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    details: String,
    slug: { type: String, unique: true, index: true },
    image: { type: String, required: true },
    subImages: [String],
    brand: String,
    pricing: {
      originalPrice: { type: Number, required: true },
      discountPercentage: { type: Number, default: 0 },
    },
    size: [String],
    color: [String],
    countInStock: { type: Number, required: true, default: 0 },
    sold: { type: Number, default: 0 },
    rating: {
      type: Number,
      required: true,
      default: 0.0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    specs: {
      countryOfProduction: String,
      weight: Number,
      model: String,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

productSchema.pre('save', function (this: IProduct) {
  if (this.isNew) {
    this.slug = slugify(this.title);
  }
});

productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'productId',
  justOne: false,
});

export default model<IProduct>('Product', productSchema);

import { Document, Model, Schema, model, models } from 'mongoose';
import slugify from 'slugify';
import { IProduct } from '@/types/products.interface';

const ObjectId = Schema.Types.ObjectId;

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


const ProductModel: Model<IProduct & Document> = models.Product || model<IProduct>('Product', productSchema);
export default ProductModel;

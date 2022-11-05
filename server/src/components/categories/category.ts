import { NextFunction } from 'express';
import { Schema, model, ObjectId } from 'mongoose';
import slugify from 'slugify';
import { ICategory } from '@/types/category.interface';

const ObjectId = Schema.Types.ObjectId;

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  image: String,
  slug: { type: String, required: true, unique: true, index: true },
  parent: {
    type: ObjectId,
    default: null,
    ref: 'Category',
  },
  descendents: [
    {
      _id: {
        type: ObjectId,
        ref: 'Category',
        index: true,
      },
      name: String,
      slug: String,
      image: String,
    },
  ],
});

categorySchema.pre('validate', function (this: ICategory, next: NextFunction) {
  this.slug = slugify(this.name);
  next();
});

export default model<ICategory>('Category', categorySchema);

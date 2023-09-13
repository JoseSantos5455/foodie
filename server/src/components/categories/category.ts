import { NextFunction } from 'express';
import { Schema, model, ObjectId, Model, Document, models } from 'mongoose';
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

let CategoryModel: Model<ICategory & Document>;

if (!models.Category) {
  CategoryModel = model<ICategory>('Category', categorySchema);
} else {
  CategoryModel = models.Category;
}

export default CategoryModel;

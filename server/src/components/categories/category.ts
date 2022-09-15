import { NextFunction } from 'express';
import { Schema, model, ObjectId, Document } from 'mongoose';
import slugify from 'slugify';

const ObjectId = Schema.Types.ObjectId;

export interface ICategory extends Document {
  name: string;
  image?: string;
  parent: ICategory['_id'] | null;
  slug: string;
  descendents: [{ _id: ICategory['_id']; name: string; image?: string; slug: string }] | [];
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  image: String,
  slug: { type: String, required: true , unique: true, index: true},
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

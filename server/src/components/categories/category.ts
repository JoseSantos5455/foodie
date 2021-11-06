import { Schema, model, ObjectId, Document } from 'mongoose';
import slugify from 'slugify';

const ObjectId = Schema.Types.ObjectId;

export interface ICategory extends Document {
  name: string;
  image?: string;
  parent: ICategory['_id'];
  slug: string;
  descendents: [{ _id: ICategory['_id']; name: string; image?: string; slug: string }];
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  image: String,
  slug: { type: String, required: true },
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

categorySchema.pre('save', function (this: ICategory) {
  this.slug = slugify(this.name);
});

export default model<ICategory>('Category', categorySchema);

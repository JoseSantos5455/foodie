import { Document } from 'mongoose';
export interface ICategory extends Document {
  name: string;
  image?: string;
  parent: ICategory['_id'] | null;
  slug: string;
  descendents: [{ _id: ICategory['_id']; name: string; image?: string; slug: string }] | [];
}

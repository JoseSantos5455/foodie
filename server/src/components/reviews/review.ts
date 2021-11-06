import { Schema, model } from 'mongoose';
import { IProduct } from '../products/product';
import { IUser } from '../users/user';

const ObjectId = Schema.Types.ObjectId;

export interface IReview {
  userName: string;
  rating: number;
  comment: string;
  product: IProduct['_id'];
  user: IUser['_id'];
}

const reviewSchema = new Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true, minlength: 3, maxlength: 200 },
  product: { type: ObjectId, ref: 'Product' },
  user: { type: ObjectId, ref: 'User' },
});

export default model<IReview>('Review', reviewSchema);

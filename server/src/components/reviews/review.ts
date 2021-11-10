import { Schema, model, Document } from 'mongoose';
import { IProduct } from '../products/product';
import { IUser } from '../users/user';

const ObjectId = Schema.Types.ObjectId;

export interface IReview extends Document {
  userName: string;
  rating: number;
  comment: string;
  productId: IProduct['_id'];
  userId: IUser['_id'];
}

const reviewSchema = new Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true, minlength: 3, maxlength: 200 },
  productId: { type: ObjectId, ref: 'Product' },
  userId: { type: ObjectId, ref: 'User' },
});

export default model<IReview>('Review', reviewSchema);

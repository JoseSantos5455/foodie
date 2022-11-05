import { Schema, model } from 'mongoose';
import { IReview } from '@/types/review.interface';
const ObjectId = Schema.Types.ObjectId;

const reviewSchema = new Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true, minlength: 3, maxlength: 200 },
  productId: { type: ObjectId, ref: 'Product' },
  userId: { type: ObjectId, ref: 'User' },
});

export default model<IReview>('Review', reviewSchema);

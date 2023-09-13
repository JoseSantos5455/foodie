import { Document, Model, Schema, model, models } from 'mongoose';
import { IReview } from '@/types/review.interface';
const ObjectId = Schema.Types.ObjectId;

const reviewSchema = new Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true, minlength: 3, maxlength: 200 },
  productId: { type: ObjectId, ref: 'Product' },
  userId: { type: ObjectId, ref: 'User' },
});


const ReviewModel: Model<IReview & Document> = models.Review || model<IReview>('Review', reviewSchema);
export default ReviewModel;

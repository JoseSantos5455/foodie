import { Document } from 'mongoose';
import { IProduct } from './products.interface';
import { IUser } from './user.interface';

export interface IReview extends Document {
  userName: string;
  rating: number;
  comment: string;
  productId: IProduct['_id'];
  userId: IUser['_id'];
}

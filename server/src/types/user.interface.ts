import { IProduct } from './products.interface';
import { Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  isPhoneValidated?: boolean;
  city?: string;
  address?: string;
  zipCode?: string;
  avatar?: string;
  role: string;
  orders: IProduct['_id'][];
  matchPassword: (password: string) => boolean;
}

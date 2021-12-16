import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IProduct } from '../products/product';

const ObjectId = Schema.Types.ObjectId;

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

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (email) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 60,
  },
  phone: String,
  isPhoneValidated: {
    type: Boolean,
    default: false,
  },
  city: String,
  address: String,
  zipCode: String,
  avatar: String,
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user',
  },
  orders: [ObjectId],
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre<IUser>('save', async function (this: IUser) {
  const encryptPassword = await bcrypt.hash(this.password, 10);
  this.password = encryptPassword;
});

export default model<IUser>('User', userSchema);

import { Document, Model, Schema, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { IUser } from '@/types/user.interface';

const ObjectId = Schema.Types.ObjectId;

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

userSchema.pre<IUser>('save', async function (next: NextFunction) {
  if (!this.isModified('password')) {
    next();
  }
  const encryptPassword = await bcrypt.hash(this.password, 10);
  this.password = encryptPassword;
});


const UserModel: Model<IUser & Document> = models.User || model<IUser>('User', userSchema);
export default UserModel;

import { Schema, model, Document } from 'mongoose';
import { IProduct } from '../products/product';
import { IUser } from '../users/user';

const ObjectId = Schema.Types.ObjectId;

export interface IOrder extends Document {
  user: IUser['_id'];
  orderItems: [
    {
      productId: IProduct['_id'];
      quantity: number;
      pricing: {
        originalPrice: number;
        discountPercentage: number;
      };
      title: string;
      image: string;
    },
  ];
  shippingInfo: {
    fullName: string;
    city: string;
    phone: string;
    isPhoneValidated: boolean;
    address: string;
    zipCode: string;
  };
  paymentMethod: string;
  orderStatus: string;
  subTotal: number;
  total: number;
  shippingPrice: number;
  isPaid: boolean;
}

const orderSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    orderItems: [
      {
        productId: { type: ObjectId, required: true, ref: 'Product' },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    shippingInfo: {
      fullName: {type: String, required: true},
      city: { type: String, required: true },
      phone: { type: String, required: true },
      isPhoneValidated: { type: Boolean, required: true },
      address: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    orderStatus: {
      type: String,
      required: true,
      default: 'pending',
      enum: ['pending', 'on going', 'canceled', 'delivered'],
    },
    subTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

export default model<IOrder>('Order', orderSchema);

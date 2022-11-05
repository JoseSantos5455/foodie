import { Schema, model } from 'mongoose';
import { IOrder } from '@/types/order.interface';

const ObjectId = Schema.Types.ObjectId;

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
        slug: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        title: { type: String, required: true },
        image: { type: String, required: true },
        variants: [
          {
            key: { type: String },
            color: { type: String },
            size: { type: String },
            qty: { type: Number },
          },
        ],
      },
    ],
    shippingInfo: {
      fullName: { type: String, required: true },
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

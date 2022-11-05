import { Document } from 'mongoose';
import { IUser } from './user.interface';
import { IProduct } from './products.interface';

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
      slug: string;
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

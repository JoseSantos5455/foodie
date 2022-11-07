import { ICart } from '@/app/slices/cartSlice';

export interface IProduct {
  title: string;
  description: string;
  details: string;
  image: string;
  subImages: string[];
  brand: string;
  pricing: { originalPrice: number; discountPercentage: number };
  countInStock: number;
  size: string[];
  color: string[];
  specs: {
    countryOfProduction: string;
    weight: number;
    model: string;
  };
  category: string;
}

export interface IProductRes extends Omit<IProduct, 'category'> {
  sold: number;
  slug: string;
  _id: string;
  reviews: IReview[];
  rating: number;
  numReviews: number;
  category: string;
}

export interface IError {
  statusCode?: number;
  title?: string;
  type?: string;
  message: string;
  errors?: any[];
}

export interface IReview {
  userName: string;
  rating: number;
  comment: string;
}

export interface ICategory {
  name: string;
  slug: string;
  image?: string;
  parent?: string;
  _id?: string;
}

export interface IUser {
  _id: string;
  id: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  isPhoneValidated: boolean;
  city: string;
  address: string;
  zipCode: string;
  avatar: string;
  role: string;
  token: string;
}

export interface IOrder {
  orderItems: (IOrderItems | ICart)[];
  shippingInfo: {
    fullName: string;
    city: string;
    phone: string;
    isPhoneValidated: boolean;
    address: string;
    zipCode: string;
  };
  paymentMethod: string;
  subTotal: number;
  total: number;
  shippingPrice: number;
  isPaid: boolean;
}

export interface IOrderRes extends IOrder {
  _id: string;
  createdAt: string;
  orderStatus: string;
}

export interface IOrderItems extends Omit<ICart, 'variants'> {
  variants?: IVariant[];
}

export interface ILoginCredentiels {
  email: string;
  password: string;
}
export interface ISignUpCredentiels extends ILoginCredentiels {
  fullName: string;
}

export interface IReviewRes extends IReview {
  _id: string;
  productId: string;
  userId: string;
}

export interface ISaga {
  type: string;
  payload: any;
}

export interface IVariant {
  key: string;
  color: string | null;
  size: string | null;
  qty: number;
}

export interface ICartItem extends Omit<ICart, 'variants'> {
  variant: IVariant | null;
}

export interface IProductForm extends Omit<IProduct, 'pricing' | 'specs'> {
  countryOfProduction: string;
  weight: number;
  model: string;
  originalPrice: number;
  discountPercentage: number;
}

export type SelectType = {
  value: string;
  label: string;
};

export interface IReviewAdmin extends Omit<IReviewRes, 'productId'> {
  productId: {
    pricing: { originalPrice: number };
    _id: string;
    title: string;
    image: string;
    id: string;
  };
}

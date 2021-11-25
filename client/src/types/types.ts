export interface IProduct {
  _id: string;
  title: string;
  description: string;
  details: string;
  slug: string;
  image: string;
  subImages: string[];
  brand: string;
  pricing: { originalPrice: number; discountPercentage: number };
  countInStock: number;
  sold: number;
  rating: number;
  numReviews: number;
  size: { val: string; price: number }[];
  specs: {
    videoLink: string;
    countryOfProduction: string;
    weight: number;
    model: string;
    color: string;
  };
  category: string;
  reviews: IReview[];
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
  productId: string;
  userId: string;
}

export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  image: string;
  subImages: string[];
  rating: number;
  pricing: {
    originalPrice: number;
    discountPercentage: number;
  };
}

export interface IError {
  statusCode?: number;
  title?: string;
  type?: string;
  message: string;
  errors?: any[];
}

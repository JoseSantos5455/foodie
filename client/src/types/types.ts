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

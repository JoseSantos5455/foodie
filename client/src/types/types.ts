export interface IProduct {
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

import PriceRange from './PriceRange';
import DiscountRange from './DiscountRange';
import RatingRange from './RatingRange';
import { useEffect, useState } from 'react';
import { IProductRes } from '@/types/types';

type Props = { setfilteredProducts: (filteredProducts: IProductRes[]) => void; products: IProductRes[] };

const Filter = ({ products, setfilteredProducts }: Props) => {
  const [ratingRange, setRatingRange] = useState(0);
  const [pricingRange, setPricingRange] = useState([0, 200000]);
  const [discountRange, setDiscountRange] = useState(0);

  useEffect(() => {
    setfilteredProducts(
      products.filter(
        (product) =>
          product.pricing.originalPrice >= pricingRange[0] &&
          product.pricing.originalPrice <= pricingRange[1] &&
          product.rating >= ratingRange &&
          product.pricing.discountPercentage >= discountRange,
      ),
    );
  }, [pricingRange, ratingRange, discountRange]);

  return (
    <>
      <PriceRange setPricingRange={setPricingRange} />
      <DiscountRange setDiscountRange={setDiscountRange} />
      <RatingRange setRatingRange={setRatingRange} />
    </>
  );
};

export default Filter;

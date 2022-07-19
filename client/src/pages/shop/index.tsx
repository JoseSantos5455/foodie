import PriceRange from './components/PriceRange';
import DiscountRange from './components/DiscountRange';
import RatingRange from './components/RatingRange';
import ProductList from '@/components/product/ProductList';
import { useAppSelector } from '@/app/store';

const Shop = () => {
  const products = useAppSelector((state) => state.products);
  return (
    <section className="py-10">
      <div className="grid grid-cols-5 gap-2">
        <div className=" border border-gray-200 py-6  bg-white shadow px-4">
          <PriceRange />
          <DiscountRange />
          <RatingRange />
        </div>
        {products.length > 0 && <ProductList products={products} hasBtn />}
      </div>
    </section>
  );
};

export default Shop;

import PriceRange from './components/PriceRange';
import DiscountRange from './components/DiscountRange';
import RatingRange from './components/RatingRange';
import ProductList from '@/components/product/ProductList';
import {useLocation} from 'react-router-dom'
import { useSearch } from '@/utils/hooks/useSearch';
import Loading from '@/components/loaders/Loading';


const Shop = () => {
  const location = useLocation() 
  const {products, isLoading, isError} = useSearch(`${location.search}`)
 

  return (
    <section className="py-10">
      {isLoading && <Loading/>}
      <div className="grid grid-cols-5 gap-2">
        <div className=" border border-gray-200 py-6  bg-white shadow px-4">
          <PriceRange  searchQuery={location.search}/>
          <DiscountRange searchQuery={location.search} />
          <RatingRange searchQuery={location.search} />
        </div>
        {products?.length > 0 && products.length > 0 && <ProductList products={products} hasBtn />}
      </div>
    </section>
  );
};

export default Shop;

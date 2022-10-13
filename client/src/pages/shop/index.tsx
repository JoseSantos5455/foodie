import ProductList from '@/components/product/ProductList';
import { useLocation } from 'react-router-dom';
import { useSearch } from '@/utils/hooks/useSearch';
import Loading from '@/components/loaders/Loading';
import Button from '@/components/UI/Button';
import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import { FaFilter } from 'react-icons/fa';
import SearchError from '@/components/UI/SearchError';
import { IProductRes } from '@/types/types';

const Shop = () => {
  const location = useLocation();
  const { products, isLoading, isError } = useSearch(`/products/shop/${location.search}`);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<IProductRes[]>(products);

  useEffect(() => {
    if (products?.length > 0) setFilteredProducts(products);
  }, [products?.length]);
  return (
    <section className="py-10">
      {isLoading && <Loading />}
      {!isError && products?.length > 0 && (
        <>
          <div className="relative mb-4 xl:hidden">
            <Button
              onClick={() => setShowFilter(!showFilter)}
              className="xl:hidden flex items-center space-x-1 font-bold"
              theme="btn-secondary"
            >
              <span>Filter</span> <FaFilter />
            </Button>
            <div
              className={`${
                !showFilter && 'hidden'
              } absolute top-8 left-0 border border-gray-200 py-6  bg-white shadow px-4`}
            >
              <Filter products={products} setfilteredProducts={setFilteredProducts} />
            </div>
          </div>
          <div className="flex justify-center xl:grid grid-cols-5 gap-2 xl:overflow-x-hidden overflow-x-scroll">
            <div className="xl:block hidden border border-gray-200 py-6  bg-white shadow px-4">
              <Filter products={products} setfilteredProducts={setFilteredProducts} />
            </div>

            {!isError && filteredProducts?.length > 0 && <ProductList products={filteredProducts} hasBtn />}
            {!isLoading && (isError || filteredProducts?.length === 0) && (
              <div className="col-span-4">
                <SearchError />
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Shop;

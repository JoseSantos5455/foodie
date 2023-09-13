import React, { useEffect } from 'react';
import { getProductsStart } from '@/app/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/store';
import ProductList from '@/components/product/ProductList';
import ErrorCard from '@/components/UI/ErrorCard';
import { getCategoriesStart } from '@/app/slices/categorySlice';
import CategoryNav from '@/components/UI/CategoryNav';
import CategorySkeleton from '@/components/loaders/CategorySkeleton';
import ProductSkeleton from '@/components/loaders/ProductSkeleton';
import Carousel from './components/Carousel';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { products, isErrorProducts, isLoadingProducts, categories, isLoadingCategory, isErrorCategory } =
    useAppSelector((state) => ({
      products: state.products,
      isErrorProducts: state.errorState.isErrorProducts,
      isLoadingProducts: state.loadingState.isLoadingProducts,
      categories: state.categories,
      isLoadingCategory: state.loadingState.isLoadingCategory,
      isErrorCategory: state.errorState.isErrorCategory,
    }));

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsStart());
    }
    if (categories.length === 0) {
      dispatch(getCategoriesStart());
    }
  }, [products.length, categories.length, dispatch]);

  return (
    <section className="py-10">
      <div className=" grid grid-cols-5 gap-2 mb-10">
        <div className="bg-white shadow-md lg:block hidden">
          {isLoadingCategory && <CategorySkeleton />}
          {isErrorCategory && <span>error !.</span>}
          {categories.length > 0 && <CategoryNav categories={categories} />}
        </div>
        <div className="lg:col-span-4 col-span-5">
         <Carousel/>
        </div>
      </div>
      {isLoadingProducts && <ProductSkeleton />}
      {isErrorProducts && <ErrorCard message={isErrorProducts.message} />}
      <div className="flex xl:grid xl:grid-cols-5 gap-2 flex-wrap justify-center">
        {products.length > 0 && <ProductList products={products} />}
      </div>
    </section>
  );
};

export default Home;

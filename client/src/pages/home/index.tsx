import React from 'react';
import ErrorBoundary from 'modules/ErrorBoundary';
import Features from './components/Features';
import { getProductsStart } from 'app/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'app/store';
import ProductList from 'components/product/ProductList';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchAction = () => dispatch(getProductsStart());
  const { products } = useAppSelector((state) => ({
    products: state.products,
  }));

  return (
    <ErrorBoundary>
      <section className="py-20">
        <button onClick={dispatchAction}>Get Products</button>
        <div className=" grid grid-cols-5 gap-2 mb-10">
          <div className="bg-white shadow-sm"></div>
          <div className="col-span-4">
            <div className="h-72 bg-white shadow-sm mb-2"></div>
            <Features />
          </div>
        </div>

        <div className=" grid grid-cols-5 gap-2">{products.length > 0 && <ProductList products={products} />}</div>
      </section>
    </ErrorBoundary>
  );
};

export default Home;

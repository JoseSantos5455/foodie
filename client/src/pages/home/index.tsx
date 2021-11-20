import ProductItem from 'components/product/ProductItem';
import React from 'react';
import ErrorBoundary from 'modules/ErrorBoundary';
import Features from './components/Features';
import { getProductsStart } from 'app/slices/productSlice';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchAction = () => dispatch(getProductsStart());

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

        <div className=" grid grid-cols-5 gap-2">
          {new Array(5).fill({}).map((item) => (
            <ProductItem
              title="producto"
              slug="product"
              rating={4}
              originalPrice={12}
              image="https://i.pinimg.com/736x/b4/07/b7/b407b70a5160814f3c5523e5c9ffa698.jpg"
              id="mlsdfkmslkm"
            />
          ))}
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Home;

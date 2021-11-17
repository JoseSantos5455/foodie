import ProductItem from 'components/product/ProductItem';
import React from 'react';
import ErrorBoundary from '../../modules/ErrorBoundary';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="py-20 grid grid-cols-5 gap-2">
        <ProductItem
          title="producto"
          slug="product"
          rating={4}
          originalPrice={12}
          image="https://i.pinimg.com/736x/b4/07/b7/b407b70a5160814f3c5523e5c9ffa698.jpg"
          id="mlsdfkmslkm"
        />
        <ProductItem title="producto" slug="product" rating={4} originalPrice={12} image="my-image" id="mlsdfkmslkm" />
        <ProductItem title="producto" slug="product" rating={4} originalPrice={12} image="my-image" id="mlsdfkmslkm" />
        <ProductItem title="producto" slug="product" rating={4} originalPrice={12} image="my-image" id="mlsdfkmslkm" />
        <ProductItem title="producto" slug="product" rating={4} originalPrice={12} image="my-image" id="mlsdfkmslkm" />
      </div>
    </ErrorBoundary>
  );
};

export default Home;

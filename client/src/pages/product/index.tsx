import React from 'react';
import { useParams } from 'react-router';
import 'styles/pages/productDetails.css';
import { useProduct } from 'utils/hooks/useProduct';
import { ProductShowcase } from './components/ProductShowcase';

const ProductDetails = () => {
  const { slug } = useParams();
  const { isError, isLoading, product } = useProduct(slug);

  return (
    <section className="py-10">
      {!isError && !isLoading && product && (
        <div className="product-grid">
          <div className="product-col-4">
            <ProductShowcase images={product.subImages} image={product.image} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;

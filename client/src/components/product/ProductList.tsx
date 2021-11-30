import React from 'react';
import ProductItem from './ProductItem';
import { IProduct } from 'types/types';

interface IProductList {
  products: IProduct[];
  hasBtn?: boolean;
}

const ProductList = ({ products, hasBtn }: IProductList) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => (
          <ProductItem
            title={product.title}
            originalPrice={product.pricing.originalPrice}
            discountPercentage={product.pricing.discountPercentage}
            image={product.image}
            id={product._id}
            rating={product.rating}
            hasBtn={hasBtn}
            slug={product.slug}
          />
        ))}
    </>
  );
};

export default ProductList;

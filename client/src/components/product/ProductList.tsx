import React from 'react';
import ProductItem from './ProductItem';
import { IProduct } from 'types/types';

interface IProductList {
  products: IProduct[];
}

const ProductList = ({ products }: IProductList) => {
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
            hasBtn={false}
            slug="product.slug"
          />
        ))}
    </>
  );
};

export default ProductList;

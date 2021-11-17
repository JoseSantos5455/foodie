import React from 'react';
import ProductItem, { IProduct } from './ProductItem';

interface IProductList {
  products: IProduct[];
}

const ProductList = ({ products }: IProductList) => {
  return (
    <div>
      {products.length > 0 &&
        products.map((product) => (
          <ProductItem
            title={product.title}
            originalPrice={product.originalPrice}
            discountPercentage={product.discountPercentage}
            image={product.image}
            id={product.id}
            rating={product.rating}
            hasBtn={false}
            slug="product.slug"
          />
        ))}
    </div>
  );
};

export default ProductList;

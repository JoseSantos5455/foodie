import ProductItem from './ProductItem';
import { IProductRes } from '@/types/types';

interface IProductList {
  products: IProductRes[];
  hasBtn?: boolean;
}

const ProductList = ({ products, hasBtn }: IProductList) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => (
          <ProductItem
            key={product._id}
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

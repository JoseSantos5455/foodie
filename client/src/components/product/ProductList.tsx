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
        products.map((product) => <ProductItem key={product._id} product={product} hasBtn={hasBtn} />)}
    </>
  );
};

export default ProductList;

import React from 'react';
import { useParams } from 'react-router';
import { useProduct } from 'utils/hooks/useProduct';

const ProductDetails = () => {
  const { slug } = useParams();
  const { isError, isLoading, product } = useProduct(slug);
  console.log(isError, isLoading, product);
  return <div></div>;
};

export default ProductDetails;

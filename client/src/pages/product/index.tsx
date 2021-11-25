import { useParams } from 'react-router';
import 'styles/pages/productDetails.css';
import { useProduct } from 'utils/hooks/useProduct';
import Details from './components/Details';
import ProductInfo from './components/ProductInfo';
import { ProductShowcase } from './components/ProductShowcase';
import ProductSpecs from './components/ProductSpecs';
import ReviewList from './components/ReviewList';

const ProductDetails = () => {
  const { slug } = useParams();
  const { isError, isLoading, product } = useProduct(slug);

  return (
    <section className="py-10">
      {!isError && !isLoading && product && (
        <>
          <div className="grid grid-cols-9 gap-2 bg-white shadow-md p-4 mb-8">
            <div className="col-span-4">
              <ProductShowcase images={product.subImages} />
            </div>
            <div className="h-full bg-gray-200 justify-self-center" style={{ width: 1 }}></div>
            <div className="col-span-4">
              <ProductInfo
                title={product.title}
                description={product.description}
                pricing={product.pricing}
                rating={product.rating}
                numReviews={product.numReviews}
                brand={product.brand}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white shadow-md p-4">
              <ReviewList reviews={product.reviews} rating={product.rating} numReviews={product.numReviews} />
            </div>
            <div className=" bg-white shadow-md p-4">{product.specs && <ProductSpecs specs={product.specs} />}</div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-4">
              <Details details={product.details} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetails;

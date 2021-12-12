import { useAppSelector } from 'app/store';
import { useParams } from 'react-router';
import 'styles/pages/productDetails.css';
import { useProduct } from 'utils/hooks/useProduct';
import Details from './components/Details';
import ProductInfo from './components/ProductInfo';
import { ProductShowcase } from './components/ProductShowcase';
import ProductSpecs from './components/ProductSpecs';
import ReviewList from './components/ReviewList';
import ShareProduct from './components/ShareProduct';
import ProductList from 'components/product/ProductList';
import { calculateDiscount } from 'utils/helpers';
import useCart from 'utils/hooks/useCart';

const ProductDetails = () => {
  const { slug } = useParams();
  const { isError, isLoading, product } = useProduct(slug);
  const products = useAppSelector((state) => state.products);
  const discountPrice = calculateDiscount(product?.pricing.originalPrice, product?.pricing.discountPercentage);
  const { onAddToCart, isItemInCart, onAddQty, onMinusQty, findItem } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      title: product.title,
      _id: product._id,
      image: product.image,
      price: discountPrice,
      qty: 1,
    };
    onAddToCart(cartItem);
  };

  return (
    <section className="py-10">
      {!isError && !isLoading && product && (
        <>
          <div className="grid grid-cols-9 gap-2 bg-white shadow-md p-4 mb-8">
            <div className="col-span-4">
              <ProductShowcase images={product.subImages} image={product.image} />
            </div>
            <div className="h-full bg-gray-200 justify-self-center" style={{ width: 1 }}></div>
            <div className="col-span-4">
              <ProductInfo
                isItemInCart={isItemInCart}
                onAddQty={onAddQty}
                onMinusQty={onMinusQty}
                findItem={findItem}
                _id={product._id}
                handleAddToCart={handleAddToCart}
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
            <div className="bg-white shadow-md p-4">
              <ShareProduct />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="font-main mb-4">Related products</h2>
            <div className="grid grid-cols-5 gap-2">
              {products.length > 0 && <ProductList products={products.slice(0, 5)} />}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetails;

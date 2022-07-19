import { useAppSelector } from '@/app/store';
import { useParams } from 'react-router';
import '@/styles/pages/productDetails.css';
import { useProduct } from '@/utils/hooks/useProduct';
import Details from './components/Details';
import ProductInfo from './components/ProductInfo';
import { ProductShowcase } from './components/ProductShowcase';
import ProductSpecs from './components/ProductSpecs';
import ReviewList from './components/ReviewList';
import ShareProduct from './components/ShareProduct';
import ProductList from '@/components/product/ProductList';
import { calculateDiscount } from '@/utils/helpers';
import useCart from '@/utils/hooks/useCart';
import DetailsSkeleton from '@/components/loaders/DetailsSkeleton';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '@/app/slices/wishlistSlice';

const ProductDetails = () => {
  const { slug } = useParams();
  const { isError, isLoading, product } = useProduct(slug);
  const products = useAppSelector((state) => state.products);
  const discountPrice = calculateDiscount(product?.pricing.originalPrice, product?.pricing.discountPercentage);
  const { onAddToCart, isItemInCart, onAddQty, onMinusQty, findItem } = useCart();

  const formCartItem = () => ({
    title: product.title,
    slug: product.slug,
    productId: product._id,
    image: product.image,
    price: discountPrice,
    qty: 1,
  });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = formCartItem();
    onAddToCart(cartItem);
  };

  const onWish = () => {
    const wishItem = formCartItem();
    dispatch(addToWishlist(wishItem));
  };

  return (
    <section className="py-10">
      {isLoading && <DetailsSkeleton />}
      {!isError && !isLoading && product && (
        <>
          <div className="lg:grid grid-cols-9 gap-2 bg-white shadow-md p-4 mb-8">
            <div className="lg:col-span-4">
              <ProductShowcase images={product.subImages} image={product.image} />
            </div>
            <div className="h-full lg:block hidden bg-gray-200 justify-self-center" style={{ width: 1 }}></div>
            <div className="lg:col-span-4">
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
                onWish={onWish}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white shadow-md p-4">
              <ReviewList reviews={product.reviews} rating={product.rating} numReviews={product.numReviews} />
            </div>
            <div className=" bg-white shadow-md p-4">{product.specs && <ProductSpecs specs={product.specs} />}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-4">
              <Details details={product.details} />
            </div>
            <div className="bg-white shadow-md p-4">
              <ShareProduct />
            </div>
          </div>
          <div className="mt-8">
            {products.length > 0 && (
              <>
                <h2 className="font-main mb-4 font-bold text-xl">Related products</h2>
                <div className="flex xl:grid xl:grid-cols-5 gap-2 xl:overflow-x-hidden overflow-x-scroll">
                  <ProductList products={products.slice(0, 5)} />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetails;

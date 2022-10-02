import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import useCart from '@/utils/hooks/useCart';
import Button from '@/components/UI/Button';
import PlusMinusBtns from '@/components/UI/PlusMinusBtns';
import { formCartItem } from '@/utils/helpers';
import useWishlist from '@/utils/hooks/useWishlist';
import { IProductRes } from '@/types/types';

export interface IProductItem {
  product: IProductRes;
  hasBtn?: boolean;
}

const ProductItem = ({ product, hasBtn = false }: IProductItem) => {
  const { isItemInCart, onAddToCart } = useCart();
  const { isItemInWish, onWishItem, onRemoveItem } = useWishlist();
  const { image, _id, pricing, slug, rating, title } = product;
  const handleAddToCart = () => {
    const cartItem = formCartItem(product);
    onAddToCart(cartItem);
  };

  const onWish = () => {
    onWishItem(formCartItem(product));
  };

  return (
    <div>
      <div className="p-2 bg-white shadow-sm hover:shadow-lg rounded-lg xl:self-start xl:w-auto w-72 xl:h-auto">
        <Link to={`/${slug}`}>
          <div className="w-full xl:h-60">
            <img src={image} alt="baby" />
          </div>
        </Link>

        <div className="flex items-center justify-between">
          <h3 className="font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden h-6 w-32  text-base">
            {title}
          </h3>
          {!isItemInWish(_id) && (
            <span className="cursor-pointer" onClick={onWish}>
              <HeartOutlined className="text-primaryDark" />
            </span>
          )}
          {isItemInWish(_id) && (
            <span onClick={() => onRemoveItem(_id)}>
              <HeartFilled className="text-red-600" />
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-lg">{pricing.originalPrice} $</h5>
          <div className="flex items-center">
            <RatingView fillColor={'#fed900'} className="contents" ratingValue={rating} size={18} />
          </div>
        </div>
        {hasBtn && (
          <div className="mt-4 p-3  transition-all duration-300">
            {!isItemInCart(_id) && (
              <Button theme="btn-primary" className="w-full" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
            {isItemInCart(_id) && <PlusMinusBtns theme="btn-primary" id={_id} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

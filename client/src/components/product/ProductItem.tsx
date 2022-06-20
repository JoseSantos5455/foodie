import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import 'styles/product/productItem.css';
import { HeartOutlined } from '@ant-design/icons';
import useCart from 'utils/hooks/useCart';
import Button from 'components/UI/Button';
import PlusMinusBtns from 'components/UI/PlusMinusBtns';
import { calculateDiscount } from 'utils/helpers';

export interface IProductItem {
  title: string;
  originalPrice: number;
  discountPercentage?: number;
  rating: number;
  image: string;
  id: string;
  hasBtn?: boolean;
  slug: string;
}

const ProductItem = ({
  title,
  originalPrice,
  discountPercentage,
  image,
  id,
  rating,
  hasBtn = false,
  slug,
}: IProductItem) => {
  const { isItemInCart, onAddToCart } = useCart();
  const handleAddToCart = () => {
    const discountPrice = calculateDiscount(originalPrice, discountPercentage);
    const cartItem = {
      title,
      slug,
      productId: id,
      image,
      price: discountPrice,
      qty: 1,
    };
    onAddToCart(cartItem);
  };

  return (
    <div>
      <div className="product-item xl:self-start xl:w-auto w-72 xl:h-auto">
        <Link to={`/${slug}`}>
          <div className="w-full xl:h-60 " style={{ backgroundImage: `url${image}` }}>
            <img src={image} alt="baby" />
          </div>
        </Link>

        <div className="flex items-center justify-between">
          <h3 className="product-title">{title}</h3>

          <HeartOutlined className="text-primaryDark" />
        </div>

        <div className="product-price">
          <h5 className="font-semibold text-lg">{originalPrice} $</h5>
          <div className="rating-stars">
            <RatingView fillColor={'#fed900'} className="contents" ratingValue={rating} size={18} />
          </div>
        </div>
        {hasBtn && (
          <div className="mt-4 p-3  transition-all duration-300">
            {!isItemInCart(id) && (
              <Button theme="btn-primary" className="w-full" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
            {isItemInCart(id) && <PlusMinusBtns theme="btn-primary" id={id} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

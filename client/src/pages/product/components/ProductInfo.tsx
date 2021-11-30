import { HeartOutlined } from '@ant-design/icons';
import { ICart } from 'app/slices/cartSlice';
import Button from 'components/UI/Button';
import { RatingView } from 'react-simple-star-rating';

type ColorProps = {
  color: string;
};

type SizeProps = {
  size: number;
};

type ProductInfoType = {
  title: string;
  description: string;
  pricing: {
    originalPrice: number;
    discountPrice?: number;
  };
  brand: string;
  rating: number;
  numReviews: number;
  _id: string;
  handleAddToCart: () => void;
  isItemInCart: (id: string) => boolean;
  onAddQty: (id: string) => void;
  onMinusQty: (id: string) => void;
  findItem: (id: string) => ICart | undefined;
};

const ColorCircle = ({ color }: ColorProps) => (
  <span style={{ backgroundColor: color }} className="inline-block w-6 h-6 rounded-full" />
);

const Size = ({ size }: SizeProps) => (
  <span className=" w-10 h-10 border hover:bg-gray-200 cursor-pointer border-gray-300 flex font-medium items-center justify-center">
    {size}
  </span>
);

const ProductInfo = ({
  title,
  description,
  brand,
  pricing,
  rating,
  numReviews,
  handleAddToCart,
  isItemInCart,
  onAddQty,
  onMinusQty,
  findItem,
  _id,
}: ProductInfoType) => {
  const colors: string[] = ['red', 'blue', 'aqua'];
  const sizes: number[] = [12, 16, 25];

  return (
    <div className="pr-16 pt-10">
      <h2 className="font-main text-2xl mb-4 font-bold">{title}</h2>
      <div className="mb-6">
        <h4 className="text-lg font-main font-medium mb-2">Description:</h4>
        <p className="font-secondary text-gray-600 ">{description}</p>
      </div>
      <h3 className="font-main uppercase font-bold mb-4">brand : {brand}</h3>
      <p className="text-xl font-bold font-main">{pricing.originalPrice} $</p>
      <div className="flex space-x-2 items-center  mb-4">
        <RatingView ratingValue={rating} />
        <span className="text-base text-gray-300">({numReviews})</span>
      </div>
      <div className="mb-4">
        <h3 className="font-secondary font-medium mb-2">color :</h3>
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <ColorCircle key={`${color}-${index}`} color={color} />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-secondary font-medium mb-2">size :</h3>
        <div className="flex space-x-2">
          {sizes.map((size, index) => (
            <Size key={`${size}-${index}`} size={size} />
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {isItemInCart(_id) && (
          <div className="flex items-center space-x-4">
            <Button onClick={() => onAddQty(_id)} theme="btn-gray self-end">
              +
            </Button>
            <span className="font-bold">{findItem(_id)?.qty}</span>
            <Button onClick={() => onMinusQty(_id)} theme="btn-gray">
              -
            </Button>
          </div>
        )}
        {!isItemInCart(_id) && (
          <Button onClick={handleAddToCart} theme="btn-large">
            Add to cart
          </Button>
        )}
        <div className="rounded-full bg-white shadow-lg flex items-center justify-center py-1 px-2">
          <HeartOutlined className="text-red-300 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

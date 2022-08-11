import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { RatingView } from 'react-simple-star-rating';
import useWishlist from '@/utils/hooks/useWishlist';
import Sizes from './Sizes';
import Colors from './Colors';
import CartBtn from './CartBtn';
import { IProductRes } from '@/types/types';
import { useState } from 'react';

type ProductInfoType = {
  product: IProductRes;
  onWish: () => void;
};

const ProductInfo = ({ product, onWish }: ProductInfoType) => {
  const { isItemInWish, onRemoveItem } = useWishlist();
  const { _id, title, description, brand, pricing, rating, numReviews, color, size } = product;
  const [selectedSize, setSelectedSize] = useState(size[0] || null);

  return (
    <div className="xl:pr-16 pt-10">
      <h2 className="font-main text-2xl mb-4 font-bold">{title}</h2>
      <div className="mb-6">
        <h4 className="text-lg font-main font-medium mb-2">Description:</h4>
        <p className="font-secondary text-gray-600 ">{description}</p>
      </div>
      <h3 className="font-main uppercase font-bold mb-4">brand : {brand}</h3>
      <p className="text-xl font-bold font-main">{pricing.originalPrice} $</p>
      <div className="flex space-x-2 items-center mb-6">
        <RatingView ratingValue={rating} />
        <span className="text-base text-gray-300">({numReviews})</span>
      </div>
      {color.length > 0 && (
        <div className="mb-4">
          <Colors colors={color} />
        </div>
      )}
      {size.length > 0 && (
        <div className="mb-6">
          <Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize} sizes={size} />
        </div>
      )}
      <div className="flex md:items-center md:flex-row flex-col  md:space-x-4 md:space-y-0 space-y-4">
        <CartBtn product={product} selectedSize={selectedSize} />
        <div className="rounded-full bg-white shadow-lg w-10 h-10 flex items-center justify-center py-1 px-2">
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
      </div>
    </div>
  );
};

export default ProductInfo;

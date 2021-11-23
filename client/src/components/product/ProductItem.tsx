import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import 'styles/product/productItem.css';
import { HeartOutlined } from '@ant-design/icons';

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
  return (
    <div className="product-item">
      {/* <div className="absolute bg-primary p-2 top-0 right-0 rounded rounded-br-none rounded-tr-none rounded-tl-none">
            <span className=" text-sm font-semibold">
               hello
            </span>
        </div> */}
      <Link to={`${slug}`}>
        <div className="w-full h-60 ">
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
          <RatingView className="contents" ratingValue={rating} size={18} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

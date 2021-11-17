import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import 'styles/product/productItem.css';

export interface IProduct {
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
}: IProduct) => {
  return (
    <div className="product-item">
      {/* <div className="absolute bg-primary p-2 top-0 right-0 rounded rounded-br-none rounded-tr-none rounded-tl-none">
            <span className=" text-sm font-semibold">
               hello
            </span>
        </div> */}
      <Link to={`${slug}`}>
        <div
          className="w-full h-60 bg-contain"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </Link>

      <div>
        <h3 className="product-title">{title}</h3>
      </div>

      <div className="product-price">
        <h5 className="font-semibold text-lg">{originalPrice} $</h5>
        <div className="rating-stars">
          <RatingView ratingValue={rating} size={18} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

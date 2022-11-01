import { IReviewAdmin } from '@/types/types';
import { RatingView } from 'react-simple-star-rating';

const CustomerRating = ({ reviews }: { reviews: IReviewAdmin[] }) => {
  return (
    <div className="rounded-xl shadow-md bg-white  p-4 ">
      <div className="border-b-2 border-gray-100  pb-4 mb-4">
        <h3 className="font-semibold text-greyAD dark:text-gray-50 capitalize">Product reviews</h3>
      </div>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review._id} className="border-b border-gray-100  pb-4 mb-2 flex items-center justify-between">
            <div className="rounded-full justify-self-center w-16 h-16 bg-gray-100"></div>
            <div>
              <h3 className="font-semibold text-greyAD dark:text-gray-200 capitalize text-base mb-4">
                {review.productId?.title}
              </h3>
              <h2 className="font-bold text-base dark:text-white">{review.productId?.pricing.originalPrice} MAD</h2>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <RatingView ratingValue={review.rating} size={15} />
              <span className="font-bold text-lg dark:text-white">{review.rating}</span>
            </div>
          </div>
        ))}
      <div className="flex justify-center">
        <span className="capitalize hover:opacity-70 font-bold text-primary text-base">View all</span>
      </div>
    </div>
  );
};

export default CustomerRating;

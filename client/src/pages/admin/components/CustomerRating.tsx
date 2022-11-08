import { IReviewAdmin } from '@/types/types';
import { RatingView } from 'react-simple-star-rating';
import ImgLoader from '@/components/UI/ImgLoader';

const CustomerRating = ({ reviews, showLink }: { reviews: IReviewAdmin[]; showLink?: boolean }) => {
  return (
    <div className="rounded-xl shadow-md bg-white  p-4 ">
      <div className="border-b-2 border-gray-100  pb-4 mb-4">
        <h3 className="font-semibold text-greyAD dark:text-gray-50 capitalize">Product reviews</h3>
      </div>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review._id} className="border-b border-gray-100  pb-4 mb-2 flex items-center justify-between">
            {review.productId?.image && (
              <ImgLoader src={review.productId?.image} alt="avatar" className="rounded-full w-10 h-10" />
            )}

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
      {showLink && (
        <div className="flex justify-center">
          <span className="capitalize hover:opacity-70 font-bold text-primary text-base">View all</span>
        </div>
      )}
    </div>
  );
};

export default CustomerRating;

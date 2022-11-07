import { IReviewRes } from '@/types/types';
import Review from './Review';
import '@/styles/pages/review.css';
import { FaStar } from 'react-icons/fa';

type ReviewsListProps = {
  reviews: IReviewRes[];
  rating: number;
  numReviews: number;
  userId: string;
  token: string;
};

const ReviewList = ({ reviews, rating, numReviews, userId, token }: ReviewsListProps) => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-gray-200  flex justify-between items-center">
        <h3 className="font-main font-bold">Reviews</h3>
        <p className="text-bold flex items-center">
          <span className="flex space-x-1 items-center mr-3">
            {rating.toFixed(1)} <FaStar className="text-yellow-400" />
          </span>
          ({numReviews})
        </p>
      </div>
      <div className="max-h-52 overflow-y-scroll px-4  ">
        {reviews?.length > 0 &&
          reviews.map((review) => <Review key={review._id} review={review} userId={userId} token={token} />)}
        {reviews.length < 1 && (
          <div className="flex items-center justify-center">
            <span className="text-gray-500">No Reviews</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewList;

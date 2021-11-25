import { IReview } from 'types/types';
import Review from './Review';
import 'styles/pages/review.css';

type ReviewsListProps = {
  reviews: IReview[];
  rating: number;
  numReviews: number;
};

const ReviewList = ({ reviews, rating, numReviews }: ReviewsListProps) => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-gray-200  flex justify-between items-center">
        <h3 className="font-main font-bold">Reviews</h3>
        <p className="text-bold">
          {rating} ({numReviews})
        </p>
      </div>
      <div className="max-h-52 overflow-y-scroll px-4  ">
        {reviews?.length > 0 && reviews.map((review) => <Review review={review} />)}
      </div>
    </div>
  );
};

export default ReviewList;

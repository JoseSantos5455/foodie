import { IReview } from '@/types/types';
import { RatingView } from 'react-simple-star-rating';

type ReviewProps = {
  review: IReview;
};

const Review = ({ review }: ReviewProps) => {
  return (
    <div className="flex items-start">
      <div className="ml-6">
        <p className="flex items-baseline">
          <span className="text-gray-600 font-bold">{review.userName}</span>
          <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
        </p>
        <div className="flex items-center mt-1">
          <RatingView ratingValue={review.rating} />
        </div>

        <div className="mt-2">
          <p className=" font-medium">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

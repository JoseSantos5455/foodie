import { delReview } from '@/api/services/reviewsApi';
import { IReviewRes } from '@/types/types';
import { DeleteFilled, EditFilled, LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';

type ReviewProps = {
  review: IReviewRes;
  userId: string;
  token: string;
};

const Review = ({ review, userId, token }: ReviewProps) => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onReviewDel = async () => {
    try {
      setLoading(true);
      const res: any = await delReview(token, review._id);
      if (res) {
        navigate(-1);
        toast.success('review deleted');
      }
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      toast.error(err.error.message);
    }
  };
  return (
    <div className="flex items-start justify-between">
      {isLoading && <LoadingOutlined />}

      {!isLoading && (
        <>
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
          {review.userId === userId && (
            <div className="flex space-x-4 items-baseline">
              <DeleteFilled onClick={onReviewDel} className="text-red-500" />
              {/* <EditFilled className="text-blue-500" /> */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Review;

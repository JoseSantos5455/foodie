import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useParams, useNavigate } from 'react-router';
import { Rating } from 'react-simple-star-rating';
import { Alert } from 'react-st-modal';
import { useAppSelector } from '@/app/store';
import toast from 'react-hot-toast';
import { addReview } from '@/api/services/reviewsApi';

type ReviewData = {
  userName: string;
  comment: string;
};

const AddReview = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const token = useAppSelector((state) => state.auth.token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: ReviewData) => {
    if (rating === 0) {
      Alert('Rating is Required', 'Rating');
    } else {
      const review = { rating, userName: data.userName, comment: data.comment };
      try {
        const res: any = await addReview(slug, review, token);
        if (res?._id) toast.success('review added successfully');
        navigate(-1);
      } catch (err: any) {
        toast.error(err.error.message);
      }
    }
  };

  return (
    <div
      className="py-6  px-4 mt-8
         "
    >
      <h2 className="font-semibold mb-6">Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto px-4">
        <div className="mb-4">
          <label className="mb-2 block font-bold" htmlFor="rating">
            Rating
          </label>

          <Rating onClick={handleRating} ratingValue={rating} />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            {...register('userName', { required: 'username is required' })}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:purpleBeta"
          />
          <div className="text-red-500 mt-2">
            <span>{errors?.userName?.message}</span>
          </div>
        </div>
        <div>
          <label className="mb-2 block font-bold" htmlFor="review">
            Review
          </label>

          <div>
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:purpleBeta"
              rows={8}
              {...register('comment', {
                required: 'a review is required',
              })}
            ></textarea>
            <div className="text-red-500 mt-2">
              <span>{errors?.comment?.message}</span>
            </div>
          </div>
        </div>
        <button className="px-6 py-1 hover:opacity-70 mt-4 rounded bg-primary text-white">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;

import { getReviewsStart } from '@/app/slices/reviewsSlice';
import { useAppSelector } from '@/app/store';
import Loading from '@/components/loaders/Loading';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CustomerRating from './components/CustomerRating';

const AllReviews = () => {
  const { auth, reviews, isLoadingReviews, isErrorReviews } = useAppSelector((state) => ({
    auth: state.auth,
    reviews: state.reviews,
    isLoadingReviews: state.loadingState.isLoadingReviews,
    isErrorReviews: state.errorState.isErrorReviews,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (reviews.length === 0) {
      dispatch(getReviewsStart(auth.token));
    }
  }, [dispatch, reviews.length, auth.token]);
  return (
    <section className="py-6  md:px-8 px-2 bg-white mt-6">
      {isLoadingReviews && <Loading />}
      {!isErrorReviews && !isLoadingReviews && reviews.length === 0 && (
        <div className="text-center py-6">
          <h1 className="text-capitalize font-bold text-gray-600">There are no reviews</h1>
        </div>
      )}
      <div className="max-w-md mx-auto">{reviews.length > 0 && <CustomerRating showComment reviews={reviews} />}</div>
    </section>
  );
};

export default AllReviews;

import { RatingView } from 'react-simple-star-rating';

const CustomerRating = () => {
  return (
    <div className="rounded-xl shadow-md bg-white  p-4 ">
      <div className="border-b-2 border-gray-100  pb-4 mb-4">
        <h3 className="font-semibold text-greyAD dark:text-gray-50 capitalize">Product reviews</h3>
      </div>
      {Array(4)
        .fill(null)
        .map((item, index) => (
          <div
            key={`orders-${index}`}
            className="border-b border-gray-100  pb-4 mb-2 flex items-center justify-between"
          >
            <div className="rounded-full justify-self-center w-16 h-16 bg-gray-100"></div>
            <div>
              <h3 className="font-semibold text-greyAD dark:text-gray-200 capitalize text-base mb-4">Product Name</h3>
              <h2 className="font-bold text-base dark:text-white">12.25$</h2>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <RatingView ratingValue={4.5} size={15} />
              <span className="font-bold text-lg dark:text-white">4.5</span>
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

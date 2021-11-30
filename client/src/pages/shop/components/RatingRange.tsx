import { RatingView } from 'react-simple-star-rating';

const RatingRange = () => {
  const ratingValues = [4, 3, 2, 1];

  return (
    <div className="mb-10">
      <h3 className="font-semibold text-base uppercase mb-4">ratings</h3>
      <div className="flex flex-col space-y-4">
        {ratingValues.map((value, index) => (
          <div key={value} className="flex items-center space-x-4">
            <input type="radio" className="w-4 h-4" />
            <div>
              <RatingView fillColor={'#fed900'} ratingValue={value} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingRange;

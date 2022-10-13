import { RatingView } from 'react-simple-star-rating';
import { useState } from 'react';

const RatingRange = ({ setRatingRange }: { setRatingRange: (rating: number) => void }) => {
  const ratingValues = [4, 3, 2, 1];
  const [selectedRate, setSelectedRate] = useState(0);

  const onRateChange = (value: number) => {
    setSelectedRate(value);
    setRatingRange(value);
  };

  return (
    <div className="mb-10">
      <h3 className="font-semibold text-base uppercase mb-4">ratings</h3>
      <div className="flex flex-col space-y-4">
        {ratingValues.map((value, index) => (
          <div key={value} className="flex items-center space-x-4">
            <input
              value={value}
              onChange={() => onRateChange(value)}
              type="radio"
              checked={selectedRate === value}
              className="w-4 h-4"
            />
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

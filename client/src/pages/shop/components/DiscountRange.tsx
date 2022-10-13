import { useState } from 'react';

const DiscountRange = ({ setDiscountRange }: { setDiscountRange: (range: number) => void }) => {
  const discountRanges: number[] = [10, 20, 30, 40, 50];
  const [selectedDiscount, setSelectedDiscount] = useState(0);

  const onDiscountChange = (range: number) => {
    setSelectedDiscount(range);
    setDiscountRange(range);
  };
  return (
    <div className="mb-10">
      <h3 className="font-semibold text-md uppercase mb-4">Discount percentage</h3>
      <div className="flex flex-col space-y-4">
        {discountRanges.map((range) => (
          <div key={range} className="flex items-center space-x-4">
            <input
              value={range}
              onChange={() => onDiscountChange(range)}
              checked={selectedDiscount === range}
              type="radio"
              className="w-4 h-4"
            />
            <label className="text-md font-semibold">
              <span className="mx-2">{`>`}</span>
              {range}%
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountRange;

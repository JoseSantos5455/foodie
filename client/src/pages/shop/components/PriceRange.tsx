import Button from '@/components/UI/Button';
import React, { useState } from 'react';

const PriceRange = ({ setPricingRange }: { setPricingRange: (range: number[]) => void }) => {
  const [range, setRange] = useState(500);
  const min = 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPricingRange([min, range]);
  };

  const clearPricing = () => {
    setPricingRange([1, 20000]);
    setRange(20000);
  };

  return (
    <div className="relative w-full mb-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <h4 className="font-semibold uppercase mb-4">Price $</h4>
          <div className="flex justify-between items-center">
            <Button onClick={clearPricing} theme="btn-secondary">
              clear
            </Button>
            <Button type="submit" theme="btn-dark">
              Apply
            </Button>
          </div>
        </div>
        <div className="w-full mb-4">
          <input
            type="range"
            min="10"
            value={range}
            onChange={(e) => handleChange(e)}
            max="1200"
            className="w-full bg-black"
          />
        </div>
      </form>
      <div className="flex items-center justify-between space-x-2">
        <div className="bg-gray-200 w-20 text-center rounded py-2">{min}</div>
        <p className="font-bold text-2xl">-</p>
        <div className="bg-gray-200 w-20 text-center rounded py-2">{range}</div>
      </div>
    </div>
  );
};

export default PriceRange;

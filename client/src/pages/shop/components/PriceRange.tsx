import Button from '@/components/UI/Button';
import React, { useState } from 'react';

const PriceRange = () => {
  const [range, setRange] = useState(500);
  const min = 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
  };

  return (
    <div className="relative w-full mb-10">
      <form>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold uppercase">Price $</h4>
          <Button theme="btn-dark">Apply</Button>
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

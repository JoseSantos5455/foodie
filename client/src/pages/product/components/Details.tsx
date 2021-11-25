import React from 'react';

interface DetailsProps {
  details: string;
}

const Details = ({ details }: DetailsProps) => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-gray-200">
        <h3 className="font-main font-bold">Details</h3>
      </div>
      <p className="text-secondary text-primaryDark text-lg">{details}</p>
    </div>
  );
};

export default Details;

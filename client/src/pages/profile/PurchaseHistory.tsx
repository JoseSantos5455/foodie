import React from 'react';
import PurchaseItem from './components/PurchaseItem';

interface Props {}

const PurchaseHistory = (props: Props) => {
  return (
    <div className="py-6">
      <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
        Purchase history
      </h3>
      <div className="max-w-lg mx-auto">
        <PurchaseItem />
      </div>
    </div>
  );
};

export default PurchaseHistory;

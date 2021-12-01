import React from 'react';
import WishItem from './components/WishItem';

const Wishlist = () => {
  return (
    <section className="py-6">
      <div className="px-2">
        <h3 className="font-semibold text-lg text-darkDB capitalize  mb-4 pb-2 border-b-2 border-gray-50">
          Your wishlist
        </h3>

        <div>
          {new Array(2).fill({}).map((product, index) => (
            <div key={`product-${index}`} className="mb-4">
              <WishItem />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;

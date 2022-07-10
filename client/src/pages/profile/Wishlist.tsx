import { useAppSelector } from 'app/store';
import WishItem from './components/WishItem';

const Wishlist = () => {
  const wishlist = useAppSelector((state) => state.wishlist);

  return (
    <div className="py-6">
      <div className="px-2">
        <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-4 pb-2 border-b-2 border-gray-50">
          Your wishlist
        </h3>
        {wishlist.length === 0 && <h3 className="text-center">Your wishlist is empty</h3>}
        {wishlist.length > 0 && (
          <div className="max-w-screen-sm mx-auto">
            {wishlist.map((wishItem) => (
              <div key={wishItem.productId} className="mb-4">
                <WishItem wishItem={wishItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

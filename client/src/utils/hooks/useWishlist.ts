import { useAppSelector, useAppDispatch } from 'app/store';
import { addToWishlist, removeFromWishlist } from 'app/slices/wishlistSlice';
import { ICart } from 'app/slices/cartSlice';

const useWishlist = () => {
  const wishlist = useAppSelector((state) => state.wishlist);
  const isItemInWish = (id: String) => !!wishlist.find((item) => item.productId === id);
  const dispatch = useAppDispatch();
  const onRemoveItem = (id: string) => dispatch(removeFromWishlist(id));
  const onWishItem = (item: ICart) => dispatch(addToWishlist);

  return { isItemInWish, onRemoveItem, onWishItem };
};

export default useWishlist;

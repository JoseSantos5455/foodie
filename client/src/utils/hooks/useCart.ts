import { addToCart, ICart, minusQtyItem, addQtyItem, removeFromCart, clearCart } from 'app/slices/cartSlice';
import { useAppDispatch, useAppSelector } from 'app/store';
import toast from 'react-hot-toast';

const useCart = () => {
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const findItem = (id: String) => cart.find((item) => item._id === id);
  const isItemInCart = (id: string) => !!findItem(id);

  const onAddToCart = (cartItem: ICart) => {
    if (isItemInCart(cartItem._id)) {
      dispatch(addQtyItem(cartItem._id));
      toast.success('Product Added to cart');
    } else {
      dispatch(addToCart(cartItem));
      toast.success('Product Added to cart');
    }
  };

  const onMinusQty = (id: string) => {
    if (isItemInCart(id)) {
      if (findItem(id)?.qty === 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(minusQtyItem(id));
      }
    }
  };

  const onAddQty = (id: string) => {
    dispatch(addQtyItem(id));
  };

  const onRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success('product removed from cart');
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return { cart, isItemInCart, onAddToCart, onRemoveFromCart, onMinusQty, onAddQty, onClearCart, findItem };
};

export default useCart;

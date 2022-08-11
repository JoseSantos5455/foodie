import Button from '@/components/UI/Button';
import { IProductRes } from '@/types/types';
import { formCartItem } from '@/utils/helpers';
import useCart from '@/utils/hooks/useCart';

const CartBtn = ({ product }: { product: IProductRes }) => {
  const { onAddToCart, isItemInCart, onAddQty, onMinusQty, findItem } = useCart();
  const { _id } = product;

  const handleAddToCart = () => {
    const cartItem = formCartItem(product);
    onAddToCart(cartItem);
  };

  return (
    <>
      {isItemInCart(_id) && (
        <div className="flex items-center space-x-4">
          <Button onClick={() => onAddQty(_id)} theme="btn-gray self-end">
            +
          </Button>
          <span className="font-bold">{findItem(_id)?.qty}</span>
          <Button onClick={() => onMinusQty(_id)} theme="btn-gray">
            -
          </Button>
        </div>
      )}
      {!isItemInCart(_id) && (
        <Button onClick={handleAddToCart} theme="btn-large md:w-auto w-full">
          Add to cart
        </Button>
      )}
    </>
  );
};

export default CartBtn;

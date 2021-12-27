import { DeleteFilled } from '@ant-design/icons';
import { ICart } from 'app/slices/cartSlice';
import Button from 'components/UI/Button';
import useCart from 'utils/hooks/useCart';

type CartItemProps = {
  cartItem: ICart;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { onMinusQty, onAddQty, onRemoveFromCart } = useCart();
  const id = cartItem.productId;
  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4">
      <div className="grid grid-cols-5 gap-2">
        <img src={cartItem.image} alt={cartItem.title} className="object-fitt rounded" />
        <div className="col-span-3 flex flex-col justify-between">
          <h4 className="font-main font-bold">{cartItem.title}</h4>
          <div className="flex space-x-6">
            <p className="text-sm">
              Unit Price:
              <span className="font-bold text-base">{cartItem.price} $</span>
            </p>
            <p className="text-sm">
              Total Price: <span className="font-bold text-base">{cartItem.price * cartItem.qty} $</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-right cursor-pointer" onClick={() => onRemoveFromCart(id)}>
            <DeleteFilled className="text-red-500 text-2xl" />
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => onAddQty(id)} theme="btn-gray self-end">
              +
            </Button>
            <span className="font-bold">{cartItem.qty}</span>
            <Button onClick={() => onMinusQty(id)} theme="btn-gray">
              -
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import { DeleteOutlined } from '@ant-design/icons';
import { ICart } from 'app/slices/cartSlice';
import Button from 'components/UI/Button';
import useCart from 'utils/hooks/useCart';

type Props = {
  wishItem: ICart;
};

const WishItem = ({ wishItem }: Props) => {
  const { onAddToCart } = useCart();
  return (
    <div className="grid lg:grid-cols-7 grid-cols-5 shadow-md bg-gray-50 items-center gap-4 p-4">
      <img
        src={wishItem.image}
        alt={wishItem.title}
        className=" w-full bg-gray-200 col-span-2 rounded-md h-32 bg-center bg-contain bg-no-repeat"
      />
      <div className="col-span-3">
        <h3 className=" text-sm col-span-3 mb-4">{wishItem.title}</h3>
        <h4 className="text-md">$ {wishItem.price}</h4>
      </div>

      <div className="flex lg:flex-col  lg:col-span-2 col-span-5 h-full items-center justify-between">
        <Button onClick={() => onAddToCart(wishItem)} theme="btn-dark">
          add to cart
        </Button>
        <span className="text-red-500 cursor-pointer text-lg">
          <DeleteOutlined />
        </span>
      </div>
    </div>
  );
};

export default WishItem;

import Button from '@/components/UI/Button';
import { IProductRes } from '@/types/types';
import { formCartItem } from '@/utils/helpers';
import useCart from '@/utils/hooks/useCart';
import { Confirm } from 'react-st-modal';
import { Size } from './Sizes';

type Props = {
  handleAddToCart: () => void;
  size: string | null;
};

const CartBtn = ({ product, selectedSize }: { product: IProductRes; selectedSize: string | null }) => {
  const { onAddToCart, isItemInCart, onAddQty, onMinusQty, findItem } = useCart();
  const { _id } = product;

  const handleAddToCart = () => {
    const cartItem = formCartItem(product);
    onAddToCart(cartItem);
  };

  return (
    <>
      {!isItemInCart(_id) ? (
        product.size.length === 0 && product.color.length === 0 ? (
          <Button onClick={handleAddToCart} theme="btn-large md:w-auto w-full">
            Add to cart
          </Button>
        ) : (
          <ConfirmVariants size={selectedSize} handleAddToCart={handleAddToCart} />
        )
      ) : (
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
    </>
  );
};

function ConfirmVariants({ size, handleAddToCart }: Props) {
  return (
    <div>
      <Button
        theme="btn-large md:w-auto w-full"
        onClick={async () => {
          const result = await Confirm(
            <div className="p-4">
              {size && (
                <span className="flex justify-between mb-2">
                  <span className="text-gray-500 text-xl">Selected Size: </span>
                  <div className="flex items-center space-x-2">
                    <Size size={size} selectedSize />
                    <span className="text-sm">Months</span>
                  </div>
                </span>
              )}
            </div>,
          );

          if (result) {
            handleAddToCart();
          }
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default CartBtn;

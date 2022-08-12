import Button from '@/components/UI/Button';
import { IProductRes } from '@/types/types';
import { formCartItem } from '@/utils/helpers';
import useCart from '@/utils/hooks/useCart';
import { Confirm } from 'react-st-modal';
import { ColorCircle } from './Colors';
import { Size } from './Sizes';

type ModelProps = {
  handleAddToCart: () => void;
  size: string | null;
  color: string | null;
};

type CartBtnProps = {
  product: IProductRes;
  selectedSize: string | null;
  selectedColor: string | null;
};

const CartBtn = ({ product, selectedSize, selectedColor }: CartBtnProps) => {
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
          <ConfirmVariants size={selectedSize} color={selectedColor} handleAddToCart={handleAddToCart} />
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

function ConfirmVariants({ size, color, handleAddToCart }: ModelProps) {
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
              {color && (
                <span className="flex justify-between mb-2">
                  <span className="text-gray-500 text-xl">Selected Color: </span>
                  <div className="flex items-center space-x-2">
                    <ColorCircle color={color} selectedColor />
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

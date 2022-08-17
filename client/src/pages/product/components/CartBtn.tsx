import Button from '@/components/UI/Button';
import { IProductRes, IVariant } from '@/types/types';
import { formCartItem } from '@/utils/helpers';
import useCart from '@/utils/hooks/useCart';
import { StaticDialog } from 'react-st-modal';
import { ColorCircle } from './Colors';
import { Size } from './Sizes';
import { ICart } from '@/app/slices/cartSlice';
import { useEffect, useState } from 'react';

type ModelProps = {
  onIncrementVariant: (id: string, variantKey: string) => void;
  findItem: (id: string) => ICart | undefined;
  id: string;
};

type CartBtnProps = {
  product: IProductRes;
  selectedSize: string | null;
  selectedColor: string | null;
};

const CartBtn = ({ product, selectedSize, selectedColor }: CartBtnProps) => {
  const { onAddToCart, isItemInCart, onAddQty, onMinusQty, findItem, onIncrementVariant } = useCart();
  const { _id } = product;
  const foundItem = findItem(_id);

  const handleAddToCart = () => {
    const cartItem = formCartItem(product, selectedSize, selectedColor);
    onAddToCart(cartItem);
  };

  return (
    <>
      {!isItemInCart(_id) ? (
        <Button onClick={handleAddToCart} theme="btn-large md:w-auto w-full">
          Add to cart
        </Button>
      ) : foundItem?.variants ? (
        <ConfirmVariants findItem={findItem} onIncrementVariant={onIncrementVariant} id={_id} />
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

function ConfirmVariants({ findItem, id, onIncrementVariant }: ModelProps) {
  const foundItem = findItem(id);
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <StaticDialog
        isOpen={isOpen}
        title="Custom static dialog"
        onAfterClose={(result: any) => {
          setOpen(false);
        }}
      >
        <div className="p-4">
          {foundItem?.variants &&
            foundItem.variants.map((variant) => (
              <div key={variant.key} className="flex justify-between items-center">
                {variant.size && (
                  <span className="flex items-center space-x-2">
                    <span> size:</span> <Size size={variant.size} selectedSize /> <span>Months</span>
                  </span>
                )}
                {variant.color && (
                  <span className="flex items-center space-x-2">
                    <span> color: </span> <ColorCircle color={variant.color} selectedColor />
                  </span>
                )}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onIncrementVariant(foundItem.productId, variant.key)}
                    className="btn-small rounded bg-primary text-white"
                  >
                    +
                  </button>
                  <span>{variant.qty}</span>
                  <button className="btn-small rounded bg-primary text-white">-</button>
                </div>
              </div>
            ))}
        </div>
      </StaticDialog>
      <button
        className="flex items-center space-x-4"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="btn btn-gray">+</span>
        <span>{foundItem?.qty}</span>
        <span className="btn btn-gray">-</span>
      </button>
    </div>
  );
}

export default CartBtn;

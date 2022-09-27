import Button from '@/components/UI/Button';
import { IProductRes } from '@/types/types';
import { formCartItem, formVariant, formVariantKey } from '@/utils/helpers';
import useCart from '@/utils/hooks/useCart';
import VariantsModel from './VariantsModel';

type CartBtnProps = {
  product: IProductRes;
  selectedSize: string | null;
  selectedColor: string | null;
};

const CartBtn = ({ product, selectedSize, selectedColor }: CartBtnProps) => {
  const {
    onAddToCart,
    isItemInCart,
    onAddQty,
    onMinusQty,
    findItem,
    onIncrementVariant,
    onDecrementVariant,
    onAddVariant,
  } = useCart();
  const { _id } = product;

  const handleAddToCart = () => {
    const cartItem = formCartItem(product, selectedSize, selectedColor);
    onAddToCart(cartItem);
  };

  const itemExistsInCart = findItem(_id);
  const selectedVariant = formVariantKey(selectedSize, selectedColor);
  const variantExists = itemExistsInCart
    ? itemExistsInCart.variants
      ? itemExistsInCart.variants[selectedVariant || '']
      : null
    : null;
  const handleAddVariant = () => {
    let variant = formVariant(selectedVariant, selectedSize, selectedColor);
    if (variant) {
      onAddVariant(_id, variant);
    }
  };

  return (
    <>
      {!isItemInCart(_id) ? (
        <Button onClick={handleAddToCart} theme="btn-large md:w-auto w-full">
          Add to cart
        </Button>
      ) : product.size.length === 0 && product.color.length === 0 ? (
        <div className="flex items-center space-x-4">
          <Button onClick={() => onAddQty(_id)} theme="btn-gray self-end">
            +
          </Button>
          <span className="font-bold">{findItem(_id)?.qty}</span>
          <Button onClick={() => onMinusQty(_id)} theme="btn-gray">
            -
          </Button>
        </div>
      ) : !variantExists ? (
        <Button onClick={handleAddVariant} theme="btn-large md:w-auto w-full">
          Add to cart
        </Button>
      ) : (
        <VariantsModel
          onDecrementVariant={onDecrementVariant}
          findItem={findItem}
          onIncrementVariant={onIncrementVariant}
          id={_id}
        />
      )}
    </>
  );
};

export default CartBtn;

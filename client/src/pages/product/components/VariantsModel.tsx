import { StaticDialog } from 'react-st-modal';
import { ColorCircle } from './Colors';
import { Size } from './Sizes';
import { useState } from 'react';
import { ICart } from '@/app/slices/cartSlice';

type ModelProps = {
  onIncrementVariant: (id: string, variantKey: string) => void;
  onDecrementVariant: (id: string, variantKey: string) => void;
  findItem: (id: string) => ICart | undefined;
  id: string;
};

function VariantsModel({ findItem, id, onIncrementVariant, onDecrementVariant }: ModelProps) {
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
                  <button
                    onClick={() => onDecrementVariant(foundItem.productId, variant.key)}
                    disabled={variant.qty === 0}
                    className="btn-small rounded bg-primary text-white"
                  >
                    -
                  </button>
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
        {foundItem ? (
          <>
            <span className="btn btn-gray">+</span>
            <span>{foundItem?.qty}</span>
            <span className="btn btn-gray">-</span>
          </>
        ) : (
          <span className="btn-large md:w-auto w-full">Add to cart</span>
        )}
      </button>
    </div>
  );
}

export default VariantsModel;

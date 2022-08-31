import useCart from '@/utils/hooks/useCart';
import Button from './Button';

type Props = {
  id: string;
  qty?: number;
  theme: string;
};

const PlusMinusBtns = ({ id, qty, theme }: Props) => {
  const { onAddQty, onMinusQty, findItem } = useCart();
  const itemQty = findItem(id);
  return (
    <div className="flex  items-center justify-between">
      <Button theme={theme} onClick={() => onAddQty(id)}>
        +
      </Button>
      <span className="font-bold">{qty ? qty : itemQty ? itemQty.qty : '0'}</span>
      <Button theme={theme} onClick={() => onMinusQty(id)}>
        -
      </Button>
    </div>
  );
};

export default PlusMinusBtns;

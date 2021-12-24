import { ReactElement } from 'react';
import { useAppSelector } from 'app/store';
import EmptyCart from 'pages/cart/components/EmptyCart';

interface Props {
  children: JSX.Element;
}

function WithCart({ children }: Props): ReactElement {
  const cart = useAppSelector((state) => state.cart);
  if (cart.length === 0)
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center">
        <EmptyCart />
      </div>
    );
  return children;
}

export default WithCart;

import { ReactElement } from 'react';
import { useAppSelector } from 'app/store';
import { CART } from 'utils/routes';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

function WithCart({ children }: Props): ReactElement {
  const cart = useAppSelector((state) => state.cart);
  if (cart.length === 0) return <Navigate to={CART} />;
  return children;
}

export default WithCart;

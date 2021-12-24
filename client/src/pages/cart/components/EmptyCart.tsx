import emptyCart from 'assets/empty-cart.png';
import Button from 'components/UI/Button';
import { Link } from 'react-router-dom';
import { HOME } from 'utils/routes';

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md text-center max-w-md p-4">
        <img src={emptyCart} alt="ampty cart" className="mb-2" />
        <h3 className="text-primaryDark mb-2 font-bold text-2xl">Your cart is empty</h3>
        <Button theme="btn-primary">
          <Link to={HOME}>Start shopping</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;

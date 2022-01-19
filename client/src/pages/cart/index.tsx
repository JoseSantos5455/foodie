import Summary from 'components/checkout/Summary';
import CartItem from 'components/product/CartItem';
import useCart from 'utils/hooks/useCart';
import EmptyCart from './components/EmptyCart';
import { calcSubTotal } from 'utils/helpers';

const Cart = () => {
  const { cart } = useCart();
  const subTotal = parseFloat(calcSubTotal(cart));

  return (
    <section className="py-10">
      <h1 className="font-main font-bold text-3xl text-center border-b border-gray-200 pb-4 mb-6">Basket</h1>
      {cart.length === 0 && <EmptyCart />}
      {cart.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
          <div>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.productId} cartItem={cartItem} />
            ))}
          </div>
          <div>
            <Summary showBtn subTotal={subTotal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;

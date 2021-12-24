import Summary from 'components/checkout/Summary';
import CartItem from 'components/product/CartItem';
import useCart from 'utils/hooks/useCart';
import EmptyCart from './components/EmptyCart';

const Cart = () => {
  const { cart } = useCart();
  return (
    <section className="py-10">
      <h1 className="font-main font-bold text-3xl text-center border-b border-gray-200 pb-4 mb-6">Basket</h1>
      {cart.length === 0 && <EmptyCart />}
      {cart.length > 0 && (
        <div className="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto">
          <div>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.productId} cartItem={cartItem} />
            ))}
          </div>
          <div>
            <Summary showBtn subTotal={12.5} tax={20} delivery={12} total={30} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;

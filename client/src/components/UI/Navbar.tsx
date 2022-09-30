import * as ROUTES from '@/utils/routes';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import { useAppSelector } from '@/app/store';
import Button from './Button';
import MobileNav from './MobileNav';
import { countCartItems } from '@/utils/helpers';

const Navbar = () => {
  const { cart, auth } = useAppSelector((state) => ({
    cart: state.cart,
    auth: !!state.auth?.id && state.auth?.role === 'user',
  }));
  return (
    <>
      <header className="py-4 bg-white w-full shadow-sm lg:block hidden">
        <nav className="mx-auto px-2" style={{maxWidth: 1184}}>
          <div className="flex justify-between items-center">
            <div>
              <Link to={ROUTES.HOME} className="font-bold text-2xl text-primary font-main">
                <img src={logo} alt="logo" className="h-8" />
              </Link>
            </div>
            <SearchBar />
            <div className="flex space-x-4 items-center">
              <Link to={ROUTES.CART}>
                <span className="relative text-primaryDark hover:text-primary text-xl">
                  <ShoppingOutlined />
                  <span className="absolute  top-0 rounded-full bg-purpleBeta w-4 h-4 right-2 p-0 m-0 text-white font-main text-xs  leading-tight text-center">
                    {countCartItems(cart) || 0}
                  </span>
                </span>
              </Link>
              <Link to={auth ? ROUTES.PROFILE_DASHBOARD : ROUTES.LOGIN}>
                <Button theme="btn-secondary" className="flex items-center space-x-2 justify-center">
                  <span className="text-white contents">
                    <UserOutlined />
                  </span>
                  <span>{auth ? 'Profile' : 'Login'}</span>
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <MobileNav cartLength={cart.length} auth={auth} />
    </>
  );
};

export default Navbar;

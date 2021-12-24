import * as ROUTES from 'utils/routes';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import 'styles/UI/navbar.css';
import logo from 'assets/logo.png';
import { useAppSelector } from 'app/store';

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <header className="header">
      <nav className="container">
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
                  {cart.length}
                </span>
              </span>
            </Link>
            <Link to={ROUTES.LOGIN}>
              <span className="text-primaryDark hover:text-primary text-xl">
                <UserOutlined />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

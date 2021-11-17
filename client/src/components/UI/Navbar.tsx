import * as ROUTES from 'utils/routes';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import 'styles/UI/navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link to={ROUTES.HOME} className="font-bold text-2xl text-primary font-main">
              Lapino
            </Link>
          </div>
          <SearchBar />
          <div className="flex space-x-4 items-center">
            <Link to={ROUTES.CART}>
              <span className="text-primaryDark hover:text-primary text-xl">
                <ShoppingOutlined />
              </span>
            </Link>
            <Link to={ROUTES.CART}>
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

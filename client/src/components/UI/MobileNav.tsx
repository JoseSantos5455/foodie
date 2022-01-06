import { ShoppingOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import SearchBar from './SearchBar';
import * as ROUTES from 'utils/routes';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import CategoryNav from './CategoryNav';
import { useAppSelector } from 'app/store';
import CategorySkeleton from 'components/loaders/CategorySkeleton';
import logo from 'assets/logo.png';

type Props = {
  cartLength: number;
  auth: boolean;
};

const MobileNav = ({ cartLength, auth }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const { categories, isLoadingCategory, isErrorCategory } = useAppSelector((state) => ({
    categories: state.categories,
    isLoadingCategory: state.loadingState.isLoadingCategory,
    isErrorCategory: state.errorState.isErrorCategory,
  }));
  return (
    <header className="bg-white py-3 px-2 lg:hidden">
      <nav>
        <ul className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Hamburger toggle={setOpen} toggled={isOpen} color="#000" />
            <Link to={ROUTES.HOME} className="font-bold text-2xl text-primary font-main">
              <img src={logo} alt="logo" className="h-8" />
            </Link>
          </div>

          <div className="flex space-x-4 items-center">
            <Link to={ROUTES.CART}>
              <span className="relative text-primaryDark hover:text-primary text-2xl">
                <ShoppingOutlined />
                <span className="absolute top-0 rounded-full bg-purpleBeta w-4 h-4 right-2 p-0 m-0 text-white font-main text-xs  leading-tight text-center">
                  {cartLength}
                </span>
              </span>
            </Link>
            <Link to={auth ? ROUTES.PROFILE_DASHBOARD : ROUTES.LOGIN}>
              <UserOutlined className="text-primaryDark hover:text-primary text-2xl" />
            </Link>
          </div>
        </ul>
        <div>
          <SearchBar />
        </div>
      </nav>
      <div
        className={`
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            fixed h-screen w-64 max-w-full 
            overflow-y-scroll top-0 left-0 
            bottom-0 z-20 py-6 px-2 
            transform transition-all duration-300 
            bg-white`}
      >
        <button className="mb-4" onClick={() => setOpen(false)}>
          <CloseOutlined />
        </button>

        <h2 className="text-primary font-semibold mb-4">Our Categories</h2>

        {categories.length > 0 && <CategoryNav categories={categories} />}
        {isLoadingCategory && <CategorySkeleton />}
        {isErrorCategory && <p>Error accured while getting categories</p>}
      </div>
    </header>
  );
};

export default MobileNav;

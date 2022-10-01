import { HomeOutlined, DollarOutlined, IdcardOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { logOut } from '@/app/slices/authSlice';
import { Link, NavLink } from 'react-router-dom';
import * as ROUTES from '@/utils/routes';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import '@/styles/pages/profile.css';
import { AiFillEdit } from 'react-icons/ai';

const profileRoutes = [
  {
    name: 'account',
    route: ROUTES.PROFILE_DASHBOARD,
    icon: <HomeOutlined />,
  },
  {
    name: 'Purchase History',
    route: ROUTES.PURCHASE_HISTORY,
    icon: <DollarOutlined />,
  },

  {
    name: 'Manage account',
    route: ROUTES.MANAGE_PROFILE,
    icon: <IdcardOutlined />,
  },
  {
    name: 'Wishlist',
    route: ROUTES.WISHLIST,
    icon: <HeartOutlined />,
  },
];

const SideNav = ({ dispatch, username = null, avatar = undefined }: any) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <div
      className={`relative lg:h-auto transition-all duration-150 lg:mb-0 mb-6
      max-h-20 h-fit lg:overflow-visible overflow-hidden
      ${sideNavOpen ? 'h-auto max-h-96' : ''}`}
    >
      <div onClick={() => setSideNavOpen(!sideNavOpen)} className="lg:hidden absolute top-2 right-1 z-50">
        <Hamburger toggle={setSideNavOpen} toggled={sideNavOpen} color="#000" />
      </div>

      <div
        className=" bg-white border border-gray-100 shadow-md z-20   
         lg:static w-full"
      >
        <div className="flex justify-center">
          <div className="lg:py-10 py-4">
            <div className="lg:mb-8 lg:text-center lg:block flex justify-between lg:space-x-0 space-x-6 items-center">
              <div className="relative w-max m-auto">
                <span className="inline-block text-2xl mb-2 mx-auto lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-gray-100">
                  {avatar ? <img src={avatar} alt="avatar" className="rounded-full" /> : <UserOutlined />}
                </span>
                <Link
                  to={ROUTES.UPLOAD_AVATAR}
                  className="bottom-2 -right-2 absolute  w-6 h-6 flex items-center justify-center bg-black border-2 border-white text-white rounded-full"
                >
                  <AiFillEdit />
                </Link>
              </div>

              <h3 className="font-bold text-base font-secondary capitalize">{username ? username : 'Customer'}</h3>
            </div>
            <ul className="flex flex-col lg:w-auto w-max mx-auto  space-y-2 lg:max-h-full transition-all duration-300 overflow-hidden lg:items-start items-center">
              {profileRoutes.map(({ name, route, icon }, index) => (
                <li
                  key={`navlink-${index}`}
                  className="font-main lg:w-auto w-max text-base font-bold  transform hover:scale-110  transition-all hover:text-primary p-4 capitalize "
                >
                  {route && (
                    <NavLink
                      className={({ isActive }) =>
                        `flex items-center space-x-2 ${isActive ? 'text-primary' : 'text-primaryDark'}`
                      }
                      to={route}
                    >
                      <span className="contents">{icon}</span>
                      <span>{name}</span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          onClick={() => dispatch(logOut())}
          className="lg:border-t-2 lg:max-h-full  overflow-hidden transition-all duration-300 py-2  border-gray-100 lg:py-4"
        >
          <span className="flex space-x-2 cursor-pointer font-main font-bold items-center text-red-500 justify-center">
            <UserOutlined className="contents" />
            <span> Log Out</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

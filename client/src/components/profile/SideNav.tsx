import { HomeOutlined, DollarOutlined, IdcardOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { logOut } from 'app/slices/authSlice';
import { NavLink } from 'react-router-dom';
import * as ROUTES from 'utils/routes';

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

const SideNav = ({ dispatch }: any) => {
  return (
    <div className="relative lg:h-auto h-40">
      <div
        className=" bg-white border border-gray-100 shadow-md z-50   
       absolute top-0 lg:static w-full"
      >
        <div className="flex justify-center">
          <div className="lg:py-10 py-4">
            <div className="lg:mb-8 lg:text-center lg:block flex justify-between space-x-6 items-center">
              <span className="text-2xl mb-2 mx-auto  flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                <UserOutlined />
              </span>

              <h3 className="font-bold text-base font-secondary capitalize">Customer</h3>
            </div>
            <ul className="flex flex-col lg:w-auto w-max mx-auto  space-y-2 lg:max-h-full transition-all duration-300 overflow-hidden">
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
                      <span className=" contents">{icon}</span>
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
          className="lg:border-t-2 lg:max-h-full  overflow-hidden transition-all duration-300 py-0  border-gray-100 lg:py-4"
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

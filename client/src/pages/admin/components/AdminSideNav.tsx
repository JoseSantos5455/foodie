import { NavLink } from 'react-router-dom';
import * as ROUTES from '@/utils/routes';
import { DashboardOutlined } from '@ant-design/icons';
import { GoPackage } from 'react-icons/go';
import { BsCardChecklist } from 'react-icons/bs';
import { FaUsers, FaProductHunt } from 'react-icons/fa';

interface Props {
  sideNavOpen: boolean;
}

const adminRoutes = [
  {
    name: 'Dashboard',
    route: ROUTES.ADMIN_DASHBOARD,
    icon: <DashboardOutlined />,
  },
  {
    name: 'All Products',
    route: ROUTES.ADMIN_ALL_PRODUCTS,
    icon: <FaProductHunt />,
  },
  {
    name: 'Add Product',
    route: ROUTES.ADMIN_ADD_PRODUCT,
    icon: <GoPackage />,
  },
  {
    name: 'All Orders',
    route: ROUTES.ADMIN_ALL_ORDERS,
    icon: <BsCardChecklist />,
  },
  {
    name: 'All Users',
    route: ROUTES.ADMIN_ALL_USERS,
    icon: <FaUsers />,
  },
];

const AdminSideNav = ({ sideNavOpen }: Props) => {
  return (
    <div
      className={`bg-white w-20   min-h-screen flex justify-center   transition-all duration-100 py-2
 
    `}
    >
      <div>
        <div className="mb-10 text-center">
          <span className="font-bold">Logo</span>
        </div>
        <ul className="flex flex-col space-y-2 items-center">
          {adminRoutes.map(({ name, route, icon }, index) => (
            <li
              key={`navlink-${index}`}
              className="font-semibold text-greyAD relative text-md transition-all duration-300  xl:p-4 p-2 capitalize text-lg"
            >
              {route && (
                <NavLink className="flex justify-center items-center group relative  " to={route}>
                  {icon}
                  <span
                    className={`group-hover:scale-100 absolute  z-50 w-auto p-2 m-2 min-w-max left-12 rounded shadow-md text-white bg-primaryDark text-xs font-bold transform scale-0 transition-all duration-200  origin-left`}
                  >
                    {name}
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSideNav;

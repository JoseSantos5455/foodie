import { NavLink } from 'react-router-dom';
import * as ROUTES from 'utils/routes';
import { DashboardOutlined, AppstoreAddOutlined } from '@ant-design/icons';

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
    name: 'Add Product',
    route: ROUTES.ADMIN_ADD_PRODUCT,
    icon: <AppstoreAddOutlined />,
  },
];

const AdminSideNav = ({ sideNavOpen }: Props) => {
  return (
    <div
      className={`bg-white  overflow-hidden  min-h-screen flex justify-center   transition-all duration-100 py-2
 ${sideNavOpen ? 'col-span-3 w-80' : 'w-20'}
    `}
    >
      <div>
        <div className="mb-10 text-center">
          <span className="font-bold">Logo</span>
        </div>
        <ul className="flex flex-col space-y-2">
          {adminRoutes.map(({ name, route, icon }, index) => (
            <li
              key={`navlink-${index}`}
              className="font-semibold text-greyAD relative text-md transition-all duration-300  xl:p-4 p-2 capitalize text-lg"
            >
              {route && (
                <NavLink
                  className="grid grid-cols-4 justify-center items-center hover:text-primary transform "
                  to={route}
                >
                  <span className="mx-2 ">{icon}</span>
                  <span
                    style={{
                      transform: `translateX(${sideNavOpen ? '0' : '150%'})`,
                    }}
                    className="col-span-3 transform transition-all duration-200 "
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

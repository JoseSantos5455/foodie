import { EllipsisOutlined, HeartFilled, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import * as ROUTES from 'utils/routes';

const ProfileDashboard = () => {
  const profilePages = [
    {
      name: 'your orders',
      icon: <ShoppingOutlined />,
      link: ROUTES.PURCHASE_HISTORY,
    },
    {
      name: 'pending orders',
      icon: <EllipsisOutlined />,
      link: ROUTES.PURCHASE_HISTORY,
    },
    {
      name: 'manage profile',
      icon: <UserOutlined />,
      link: ROUTES.MANAGE_PROFILE,
    },
    {
      name: 'your wishlist',
      icon: <HeartFilled />,
      link: ROUTES.WISHLIST,
    },
  ];
  return (
    <div className="py-10 px-4">
      <h3 className="font-semibold text-lg text-darkDB capitalize  mb-4 pb-2 border-b-2 border-gray-50">
        Your Account
      </h3>
      <div className="grid md:grid-cols-2 grid-rows-2 items-stretch gap-10">
        {profilePages.map((route, index) => (
          <div className="w-full">
            <Link
              key={`${route}-${index}`}
              to={route.link}
              className="w-full inline-block p-8 bg-peach hover:shadow  bg-primaryLight h-full transform transition-all rounded-md"
            >
              <h3 className="font-bold flex items-center space-x-4  capitalize mb-2">
                <span className="w-10 text-2xl  h-10 flex items-center justify-center rounded-full  bg-white text-primary">
                  {route.icon}
                </span>
                <span className="text-gray-600 text-xl">{route.name}</span>
              </h3>
              <p className="flex pl-3 space-x-4 items-baseline capitalize">
                <span className="text-2xl text-gray-900">12</span>
                <span className="text-sm text-gray-500">orders</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDashboard;

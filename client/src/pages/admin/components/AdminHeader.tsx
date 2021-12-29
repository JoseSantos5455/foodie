import { Dispatch } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { UserOutlined } from '@ant-design/icons';

interface Props {
  setSideNavOpen: Dispatch<React.SetStateAction<boolean>>;
  sideNavOpen: boolean;
}

const AdminHeader = ({ sideNavOpen, setSideNavOpen }: Props) => {
  return (
    <div className="pt-2 lg:rounded-md px-6 bg-white">
      <div className="flex flex-col lg:flex-row py-1 justify-between">
        <div className="relative flex space-x-4 items-center w-max z-50">
          <Hamburger toggled={sideNavOpen} toggle={setSideNavOpen} size={25} />
        </div>

        <div className="w-full relative z-40 pt-3 lg:pt-0 lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div>
            <span className="text-lg flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
              <UserOutlined />
            </span>
          </div>

          <h3 className="text-sm font-semibold  pl-2 ">admin</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

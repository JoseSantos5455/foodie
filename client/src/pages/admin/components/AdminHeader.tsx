import { logOut } from '@/app/slices/authSlice';
import { useAppDispatch } from '@/app/store';
import Button from '@/components/UI/Button';
import { UserOutlined } from '@ant-design/icons';

const AdminHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="pt-2 lg:rounded-md px-6 bg-white">
      <div className="flex flex-col lg:flex-row py-1  justify-between">
        <h1 className="font-bold font-primary text-xl">Dashboard</h1>
        <div className="w-full relative z-40 pt-3 lg:pt-0 lg:w-1/2 flex justify-center space-x-4 lg:justify-end items-center">
          <div>
            <span className="text-lg flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
              <UserOutlined />
            </span>
          </div>

          <h3 className="text-sm font-semibold  pl-2 ">admin</h3>
          <Button onClick={() => dispatch(logOut())} theme="btn-primary">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

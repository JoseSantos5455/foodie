import { Outlet } from 'react-router';
import SideNav from './SideNav';

const Profile = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-4 gap-12">
        <SideNav />
        <div className="col-span-3 bg-white p-4 shadow-md rounded">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;

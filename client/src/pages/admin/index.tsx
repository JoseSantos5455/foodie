import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminSideNav from './components/AdminSideNav';

const Admin = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <main>
      <section
        className="bg-primaryBg dark:bg-darkBg overflow-x-hidden"
        style={{
          maxWidth: 2000,
        }}
      >
        <div className="flex transition-all duration-300 ">
          <AdminSideNav sideNavOpen={sideNavOpen} />
          <div style={{ gridColumn: 'none' }} className={`w-full transform transition-all duration-300 px-6 py-2`}>
            <AdminHeader setSideNavOpen={setSideNavOpen} sideNavOpen={sideNavOpen} />

            <div className="relative transition-all duration-500 ">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;

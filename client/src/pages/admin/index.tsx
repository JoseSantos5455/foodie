import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminSideNav from './components/AdminSideNav';

const Admin = () => {
  return (
    <main>
      <section
        className="bg-primaryBg dark:bg-darkBg overflow-x-hidden"
        style={{
          maxWidth: 2000,
        }}
      >
        <div className="flex transition-all duration-300 ">
          <AdminSideNav />
          <div
            style={{ gridColumn: 'none' }}
            className={`w-full transform transition-all duration-300 sm:px-6 px-2 py-2`}
          >
            <AdminHeader />

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

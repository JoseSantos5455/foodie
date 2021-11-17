import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <main className="bg-primaryLight">
      <Navbar />
      <div className="max-w-screen-xl px-2 mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;

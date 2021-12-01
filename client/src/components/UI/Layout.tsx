import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div style={{ maxWidth: 1184 }} className=" px-2 mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;

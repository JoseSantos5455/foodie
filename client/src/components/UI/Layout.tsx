import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <main>
      <header className="w-full h-20 bg-indigo-500">
        <Link to="/order-summary">go here</Link>
        <h1>logo</h1>
        <div className="max-w-screen-xl px-2 mx-auto">
          <Outlet />
        </div>
      </header>
      <footer className="bg-red-700">&copy; 20222 - zino chan</footer>
    </main>
  );
};

export default Layout;

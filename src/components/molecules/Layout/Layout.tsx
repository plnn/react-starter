import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navbar/Navbar.tsx';
import Header from '../header/Header.tsx';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='navigationWrapper'>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
};
export default Layout;

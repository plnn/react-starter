import React from 'react';
import Header from '../header/Header.tsx';
import Navigation from '../Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
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

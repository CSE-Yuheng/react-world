import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

function Layout() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
}

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

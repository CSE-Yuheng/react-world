import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

function Layout() {
  return (
    <div className="app-layout">
      {/* Site header and nav are persistent across pages */}
      <Header />
      <Navigation />
      {/* Outlet renders the matched page component */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

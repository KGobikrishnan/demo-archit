import React from 'react';
import { Outlet } from 'react-router-dom';
import StudioNavbar from '../components/navigation/StudioNavbar';
import StudioFooter from '../components/footer/StudioFooter';
import CustomCursor from '../components/common/CustomCursor';
import ScrollToTop from '../components/common/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="studio-app-root">
      <CustomCursor />
      <ScrollToTop />
      <StudioNavbar />
      <main id="main-content" style={{ minHeight: '80vh', paddingTop: 'var(--nav-height)' }}>
        <Outlet />
      </main>
      <StudioFooter />
    </div>
  );
}

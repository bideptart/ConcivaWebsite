import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      {/* resets scroll on every route change — must sit inside the Router
          because it reads useLocation() */}
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

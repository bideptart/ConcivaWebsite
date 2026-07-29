import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import AppRoutes from './app/routes/AppRoutes';
import ScrollToTop from './shared/components/common/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

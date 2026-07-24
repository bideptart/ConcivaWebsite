import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Industries from '../pages/Industries';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;

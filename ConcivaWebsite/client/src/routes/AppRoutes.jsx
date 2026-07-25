import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home       from '../pages/Home';
import Features   from '../pages/Features';
import Industries from '../pages/Industries';
import Pricing    from '../pages/Pricing';
import Blog       from '../pages/Blog';
import FAQ        from '../pages/FAQ';
import About      from '../pages/About';
import Services   from '../pages/Services';
import Contact    from '../pages/Contact';
import NotFound   from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/features"   element={<Features />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/pricing"    element={<Pricing />} />
      <Route path="/blog"       element={<Blog />} />
      <Route path="/faq"        element={<FAQ />} />
      <Route path="/about"      element={<About />} />
      <Route path="/services"   element={<Services />} />
      <Route path="/contact"    element={<Contact />} />
      <Route path="*"           element={<NotFound />} />
    </Routes>
  );
}

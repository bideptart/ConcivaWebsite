import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home       from '../../features/home/Home.page';
import Features   from '../../features/product/Product.page';
import Industries from '../../features/industries/Industries.page';
import Pricing    from '../../features/pricing/Pricing.page';
import Blog       from '../../features/blog/Blog.page';
import BlogPost   from '../../features/blog/BlogPost.page';
import FAQ        from '../../features/faq/FAQ.page';
import About      from '../../features/static-pages/About.page';
import Services   from '../../features/static-pages/Services.page';
import Contact    from '../../features/static-pages/Contact.page';
import Login      from '../../features/auth/Login.page';
import NotFound   from '../../features/static-pages/NotFound.page';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/features"   element={<Features />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/pricing"    element={<Pricing />} />
      <Route path="/blog"       element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/faq"        element={<FAQ />} />
      <Route path="/about"      element={<About />} />
      <Route path="/services"   element={<Services />} />
      <Route path="/contact"    element={<Contact />} />
      <Route path="/login"      element={<Login />} />
      <Route path="*"           element={<NotFound />} />
    </Routes>
  );
}

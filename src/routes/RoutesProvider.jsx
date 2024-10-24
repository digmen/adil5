import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import Product from '../pages/product/Product';
import Service from '../pages/servicePage/Service';
import Contact from '../pages/contactPage/Contact';

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
};

export default RoutesProvider;

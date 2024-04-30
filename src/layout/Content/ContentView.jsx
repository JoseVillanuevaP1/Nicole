import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '@components/Home/HomeView';
import AboutView from '@components/About/AboutView';
import ServicesView from '@components/Services/ServicesView';
import ContactView from '@components/Contact/ContactView';
import { testimonialData } from '../../data/testimonials';

const ContentView = () => {

  const [testimonial, setTestimonial] = useState(testimonialData);
  const addTestimonio = (nuevoTestimonio) => {
    setTestimonial([...testimonial, nuevoTestimonio]);
  };

  return (
    <Routes>

      <Route
        path="/"
        element={<HomeView testimonial={testimonial} />} />
      <Route
        path="/about"
        element={<AboutView />} />
      <Route
        path="/services"
        element={<ServicesView />} />
      <Route
        path="/contact"
        element={<ContactView addTestimonio={addTestimonio} />} />

    </Routes>
  );
}

export default ContentView;

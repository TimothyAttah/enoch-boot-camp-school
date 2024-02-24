import React from 'react';
import { Hero } from '../Hero';
import AboutUs from '../AboutUs';
import Gains from '../Gains';
import Pricing from '../Pricing';
import Register from '../Register';
import Courses from '../Courses';
import ContactUs from '../ContactUs';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Hero />
      <Gains />
      <AboutUs />
      <Pricing />
      <Register />
      <Courses />
      <ContactUs />
    </div>
  );
};

export default Home;

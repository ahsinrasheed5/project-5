import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import AboutUS from './components/About/AboutUs';
import Testimonials from  './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <AboutUS/>
      <Testimonials />
      <Footer/>
    </>
  );
}

export default App;

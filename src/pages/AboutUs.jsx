import React from 'react';
import '../styles/main.css';
import Navbar from '../components/navbar/NavBar';
import AboutUsComponent from '../containers/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

function AboutUs() {
  return (
    <div className="App bg-findMe">
      <Navbar />
      <hr />
      <AboutUsComponent />
      <Footer />
    </div>
  );
}

export default AboutUs;

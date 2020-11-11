import React from 'react';
import '../styles/main.css';
import Navbar from '../components/navbar/NavBar';
import ContactUsComponent from '../containers/ContactUs/ContactUsContainer';
import Footer from '../components/Footer/Footer';

function ContactUsPage() {
  return (
    <div className="App bg-findMe">
      <Navbar />
      <hr />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}

export default ContactUsPage;

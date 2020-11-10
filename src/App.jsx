import React from 'react';
import './styles/main.css';
import ContacUs from './containers/ContactUs/ContactUsContainer';
import Footer from './containers/Home/FooterSection';
import Navbar from './components/navbar/NavBar';
import SliderCards from './containers/Home/SliderCards';
import WebsiteDescription from './containers/WebsiteDescription/WebsiteDescription';
import MissingPeople from './containers/HomePage/MissingPeople';
import Statistics from './components/Statistics/Statistics.js';
import info from './components/Statistics/data';

function App() {
  return (
    <div className="App bg-findMe">
      <Navbar />
      <hr />
      <SliderCards />

      <Statistics info={info} />
      <WebsiteDescription />
      <MissingPeople />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/main.css';

import ContacUs from '../containers/ContactUs/ContactUsContainer';

import SliderCards from '../containers/Home/SliderCards';
import WebsiteDescription from '../containers/WebsiteDescription/WebsiteDescription';
import MissingPeople from '../containers/HomePage/MissingPeople';
import Statistics from '../components/Statistics/Statistics.js';
import info from '../components/Statistics/data';

// test pages
// import C from '../pages/Contactus';

function Home() {
  return (
    <div className="App bg-findMe">
      <hr />
      <SliderCards />
      <Statistics info={info} />
      <WebsiteDescription />
      <MissingPeople />
    </div>
  );
}

export default Home;

import React from 'react';
import './styles/main.css';
import ContacUs from './containers/ContactUs/ContactUsContainer';
import Footer from './containers/Home/FooterSection';
import Navbar from './components/navbar/NavBar';
import SliderCards from './containers/Home/SliderCards';

function App() {
  return (
    <div className="App bg-findMe">
      <p className="text-black">learn react</p>
      <Navbar />
      <hr />
      <SliderCards />
    <Footer />
    </div>
  );
}

export default App;

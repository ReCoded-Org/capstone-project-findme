import React, { Suspense } from 'react';
import './styles/main.css';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import RouterPage from './router/RouterPages';

// import ContacUs from './containers/ContactUs/ContactUsContainer';
// import Footer from './containers/Home/FooterSection';
// import Navbar from './components/navbar/NavBar';
// import SliderCards from './containers/Home/SliderCards';
// import WebsiteDescription from './containers/WebsiteDescription/WebsiteDescription';
// import MissingPeople from './containers/HomePage/MissingPeople';
// import Statistics from './components/Statistics/Statistics.js';
// import info from './components/Statistics/data';

// test pages
// import C from './pages/Contactus';

/*  <Navbar />
      <Router />
      <Footer />
    */

const scrollButtonStyle = {
  position: 'fixed',
  right: '-100px',
  bottom: '150px',
  transition: 'right 0.5s',
  cursor: 'pointer',
  backgroundColor: '#2B6CB0',
  color: 'white',
  fontSize: '20px',
  padding: '10px',
  borderColor: '#2B6CB0ed', // #2B6CB0
  border: 'none',
  fill: 'white',
  focus: 'focus:outline-none',
};

function App() {
  return (
    <div className="App bg-findMe">
      <RouterPage />
      <ScrollUpButton
        style={scrollButtonStyle}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      />
    </div>
  );
}

export default App;

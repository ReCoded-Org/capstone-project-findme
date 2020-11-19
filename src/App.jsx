import i18next from 'i18next';

import React, { Suspense } from 'react';
import './styles/main.css';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterPage from './router/RouterPages';

import Footer from './containers/Home/FooterSection';
import Navbar from './components/navbar/NavBar';

// the pages
import AboutUsPage from './pages/AboutUs.jsx';
import Home from './pages/Home';
import MissingPeople from './pages/MissingPeople';
import ContactUs from './pages/Contactus';
import PostMissingPerson from './pages/PostMissingPerson';
import MissingPerson from './containers/MissedPersonPage/MissedPersonDetails';
import commonAr from './translations/ar/common.json';
import commonEn from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: commonEn, // 'common' is our custom namespace commonAr
    },
    ar: {
      common: commonAr,
    },
  },
});
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
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/missing_people" exact component={MissingPeople} />
        <Route
          path="/missing_people_details/:id"
          render={({ match }) => <MissingPerson {...match} match={match} />}
        />
        <Route path="/add_post" exact component={PostMissingPerson} />
        <Route path="/about_us" component={AboutUsPage} />
        <Route path="/contact_us" exact component={ContactUs} />
      </Switch>
      <ScrollUpButton
        style={scrollButtonStyle}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      />
      <Footer />
    </Router>
  );
}

export default App;

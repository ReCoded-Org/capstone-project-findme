import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../containers/Home/FooterSection';
import Navbar from '../components/navbar/NavBar';

// the pages
import AboutUsPage from '../pages/AboutUs.jsx';
import Home from '../pages/Home';
import MissingPeople from '../pages/MissingPeople';
import ContactUs from '../pages/Contactus';
import PostMissingPerson from '../pages/PostMissingPerson';
import MissingPerson from '../pages/MissedPerson';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const RouterPages = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/missing_people" exact component={MissingPeople} />
        <Route path="/missing_people_details/id:"  component={MissingPerson} />
        <Route path="/add_post" exact component={PostMissingPerson} />
        <Route path="/about_us" component={AboutUsPage} />
        <Route path="/contact_us" exact component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default RouterPages;
//       

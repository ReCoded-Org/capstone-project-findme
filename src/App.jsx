import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import Footer from './containers/Home/FooterSection';
import Navbar from './components/navbar/NavBar';

// the pages
import AboutUsPage from './pages/AboutUs.jsx';
import Home from './pages/Home';
import MissingPeople from './pages/MissingPeople';
import ContactUs from './pages/Contactus';
import PostMissingPerson from './pages/PostMissingPerson';
import MissingPerson from './containers/MissedPersonPage/MissedPersonDetails';

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
      <Footer />
    </Router>
  );
}
export default App;
//

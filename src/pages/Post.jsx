import React from 'react';
import '../styles/main.css';
import Footer from '../containers/Home/FooterSection';
import Navbar from '../components/navbar/NavBar';
import Add from '../containers/AddMissingPesrson/AddMissingPerson'


function Post() {
  return (
    <div className="App bg-findMe">
      <Navbar />
      <hr />
      <Add />
      <Footer />
    </div>
  );
}

export default Post;

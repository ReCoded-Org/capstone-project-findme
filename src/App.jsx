import React from 'react';
import './styles/main.css';
import Navbar from './components/navbar/NavBar';
import SliderCards from './containers/Home/SliderCards';

function App() {
  return (
    <div className="App bg-findMe">
      <Navbar />
      <hr />
      <SliderCards />
    </div>
  );
}

export default App;

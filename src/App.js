import React from 'react';
import './styles/main.css';
// import footer section
// import Footer from './containers/Home/FooterSection';
// import Add Missing Person
import MissingPersonForm from './containers/AddMissingPesrson/AddMissingPerson';

function App() {
  return (
    <div className="App">
      <p className="text-black">learn react</p>
      <MissingPersonForm />
    </div>
  );
}

export default App;

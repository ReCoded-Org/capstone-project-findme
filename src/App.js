import React from 'react';
import './styles/main.css';
import MissingPeople from './containers/HomePage/MissingPeople';

function App() {
  return (
    <div className="App">
      <MissingPeople missingPeople="Missing People" />
    </div>
  );
}

export default App;

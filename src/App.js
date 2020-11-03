import React from 'react';
import './styles/main.css';
// import MissingPeople from './containers/HomePage/MissingPeople';
import MissingPeople from './containers/HomePage/MissingPeople';
import MissingPeoplePage from './containers/MissingPeople/MissingPeoplePage';

function App() {
  return (
    <div className="App">
      <MissingPeople missingPeople="Missing People" />
      {/* <hr /> */}
      <MissingPeoplePage />
    </div>
  );
}

export default App;

import React from 'react';
import './styles/main.css';
// import footer section
import Footer from './containers/Home/FooterSection';
import MissingPersonForm from './components/MissingPersonForm/MissingPersonForm';
// import RouterPages from './router/RouterPages';
function App() {
  return (
    <div className="App">
      <p className="text-black">learn react</p>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './styles/main.css';

import { Statitics } from './components/Statistics/Statistics';
import lensIcon from './images/lens.svg';
import glassesIcon from './images/glasses.svg';
import locationIcon from './images/location.svg';

function App() {
  // Statistics data
  const info = [
    {
      id: 1,
      text: 'مشاهدة',
      icon: glassesIcon,
      figure: 1250,
    },
    {
      id: 2,
      text: 'شخص تم إيجاده',
      icon: lensIcon,
      figure: 16,
    },
    {
      id: 3,
      text: 'مفقود',
      icon: locationIcon,
      figure: 240,
    },
  ];
  return (
    <div className="App">
      <Statitics info={info} />
    </div>
  );
}

export default App;

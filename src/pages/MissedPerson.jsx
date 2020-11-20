import React, { useEffect, useState } from 'react';

import MissingPerson from '../containers/MissedPersonPage/MissedPersonDetails';

const MissingPersonPage = () => {
  const [id, setid] = useState('');
  

  return (
    <div className="App bg-findMe">
      <MissingPerson  />
    </div>
  );
};

export default MissingPersonPage;

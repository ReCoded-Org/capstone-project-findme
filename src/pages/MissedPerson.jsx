import React, { useEffect } from 'react';

import MissingPerson from '../containers/MissedPersonPage/MissedPersonDetails';

const MissingPersonPage = ({match}) => {
  useEffect(() => {
    console.log("hi all "+ match);
    //alert(match)
  }, []);

  return (
    <div className="App bg-findMe">
      <p>{match.params}</p>
      <MissingPerson  />
    </div>
  );
};

export default MissingPersonPage;

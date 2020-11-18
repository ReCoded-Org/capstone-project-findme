import React, { useEffect,useState } from 'react';

import MissingPerson from '../containers/MissedPersonPage/MissedPersonDetails';

const MissingPersonPage = ({match}) => {
  const [missedDetails, setDetails]= useState({})
  useEffect(() => {
    console.log(match);
    setDetails(match)
  }, [match]);
 
  console.log(match.params.id)
  return (
    <div className="App bg-findMe">
      <MissingPerson  details={missedDetails}/>
    </div>
  );
};

export default MissingPersonPage;

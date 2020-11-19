import React, {useState, useEffect} from 'react';

import MissedPersonNameAndStatus from '../../components/MissedPersonNameAndStatus/MissedPersonNameAndStatus';
import MissedPeronImage from '../../components/MissedPersonImage/MissedPeronImage';
import MissedPersonOtherData from '../../components/MissedPersonOtherData/MissedPersonOtherData';
import Data from '../../Data';
import useFirestore from './useFirestore'
const initialFValues = {
  fristName: '',
  secondName: '',
  thirdName: '',
  surname: '',
  phoneNumber: '',
  phoneNumber2: '',
  locationOfLoss: '',
  lostSince: '',
  lastPlaceSeen: '',
  lastUpdate: '',
  age: '',
  gender: '',
  relationship: '',
  job: '',
  notes: '',
  specialSituotion: '',
  isLookingFor: false,
};
const MissedPersonDetails = ({match}) => {
  const { docs,state } = useFirestore(match.params.id);
  //const [missedDetails, setDetails]= useState('')
  const [missed, setDetail]= useState(initialFValues);
  //const [user, setUser]= useState(usersInit);


 
  useEffect(() => {
    console.log('id', match.params.id);
    //console.log('docs', docs.values);
    console.log('state', state);

    //setDetail(getDataById( x, docs))
    
    if (state===''){
    //console.log(docs);
    setDetail(docs.values)   
  }

  }, [docs.values]);
  console.log(missed)
  
   
  return (
    <div className="flex justify-center items-center">
          

    <div className="flex flex-col w-full lg:w-3/4 rounded-3xl shadow-2xl mx-4 my-4 px-2 py-2">
      <div className="flex items-center">
        <MissedPersonNameAndStatus 
          missedPersonName={missed.fristName}
          status={missed.isLookingFor?'is looking for his family': 'Lost'}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center lg:flex-row lg:justify-around sm:mt-8">
        <MissedPeronImage src={docs.url} alt={missed.fristName} />
        <MissedPersonOtherData other={missed} />

      </div>
    </div>
        
  </div>
  );
};

export default MissedPersonDetails;

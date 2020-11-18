import React, {useEffect, useState} from 'react';

import RowOfData from '../RowOfData/RowOfData';
import Data from '../../Data';
import useFirestore from '../../containers/MissedPersonPage/useFirestore'
import { userEmail } from '../navbar/NavBar';
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
  const usersInit={
    name:'',
    email:'',
    id:'',
  }
const MissedPersonOtherData = ({other}) => {
  //const { docs,state } = useFirestore(id);
  //const [missedDetails, setDetails]= useState('')

  const [missed, setDetail]= useState(initialFValues);
  //const [user, setUser]= useState(usersInit);

  useEffect(() => {
   
    setDetail(other)   
    //setUser(userInfo.user)   

  //}

  }, [other]);
 
  return (
    <div className="lg:w-2/4 ml-4 lg:ml-0">
      <div className="mb-4">
        <p className="text-gray-500">Informations</p>
        <hr className="x" />
      </div>
      {/* Informations Section */}
      <div className="flex flex-col text-sm sm:flex-row lg:text-md">
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Location of lose:" data={missed.locationOfLoss} />
          <RowOfData label="Lost since:" data={missed.lostSince} />
          <RowOfData label="Age:" data={missed.age} />
          <RowOfData label="Notes:" data={missed.notes} />
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Last place seen:" data={missed.lastPlaceSeen} />
          <RowOfData label="Last update:" data={missed.lastUpdate} />
          <RowOfData label="Gender:" data={missed.gender} />
          <RowOfData
            label="Special situation:"
            data={missed.specialSituation}
          />
        </div>
      </div>

      {/* Poster and Contact Info Section */}
      <div className="my-4">
        <p className="text-gray-500">Poster and Contact Info</p>
        <hr className="x" />
      </div>
      <div className="flex flex-col text-sm sm:flex-row lg:text-md mb-8 sm:mb-20">
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Name:" data={missed.fristName} />
          <RowOfData label="Phone number:" data={missed.phoneNumber} />
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Realtionship:" data={missed.realtionship} />
          <RowOfData label="Phone number 2:" data={missed.phoneNumber2} />
        </div>
      </div>
    </div>
  );
};

export default MissedPersonOtherData;

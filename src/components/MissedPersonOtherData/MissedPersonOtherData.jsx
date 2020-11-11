import React from 'react';

import RowOfData from '../RowOfData/RowOfData';
import Data from '../../Data';

const MissedPersonOtherData = () => {
  return (
    <div className="lg:w-2/4 ml-4 lg:ml-0">
      <div className="mb-4">
        <p className="text-gray-500">Informations</p>
        <hr className="x" />
      </div>
      {/* Informations Section */}
      <div className="flex flex-col text-sm sm:flex-row lg:text-md">
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Location of lose:" data={Data[1].locationOfLose} />
          <RowOfData label="Lost since:" data={Data[1].lostSince} />
          <RowOfData label="Age:" data={Data[1].age} />
          <RowOfData label="Notes:" data={Data[1].notes} />
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Last place seen:" data={Data[1].lastPlaceSeen} />
          <RowOfData label="Last update:" data={Data[1].lastUpdate} />
          <RowOfData label="Gender:" data={Data[1].gender} />
          <RowOfData
            label="Special situation:"
            data={Data[1].specialSituation}
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
          <RowOfData label="Name:" data={Data[1].contactName} />
          <RowOfData label="Phone number:" data={Data[1].phoneNumber} />
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Realtionship:" data={Data[1].realtionship} />
          <RowOfData label="Phone number 2:" data={Data[1].phoneNumber2} />
        </div>
      </div>
    </div>
  );
};

export default MissedPersonOtherData;

import React from 'react';

import MissedPersonNameAndStatus from '../../components/MissedPersonNameAndStatus/MissedPersonNameAndStatus';
import MissedPeronImage from '../../components/MissedPersonImage/MissedPeronImage';
import MissedPersonOtherData from '../../components/MissedPersonOtherData/MissedPersonOtherData';
import Data from '../../Data';

const MissedPersonDetails = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full lg:w-3/4 rounded-3xl shadow-2xl mx-4 my-4 px-2 py-2">
        <div className="flex items-center">
          <MissedPersonNameAndStatus
            missedPersonName={Data[1].name}
            status={Data[1].status}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center lg:flex-row lg:justify-around sm:mt-8">
          <MissedPeronImage src={Data[1].image} alt="Albert Einstein" />
          <MissedPersonOtherData />
        </div>
      </div>
    </div>
  );
};

export default MissedPersonDetails;

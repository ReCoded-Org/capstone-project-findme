import React from 'react';
import '../MissedPersonPage/style.css';

import MissedPersonNameAndStatus from '../../components/MissedPersonNameAndStatus/MissedPersonNameAndStatus';
import MissedPeronImage from '../../components/MissedPersonImage/MissedPeronImage';
import MissedPersonOtherData from '../../components/MissedPersonOtherData/MissedPersonOtherData';
import Einstein from '../../images/albert-einstein.jpg';

const MissedPersonDetails = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full lg:w-3/4 rounded-3xl shadow-2xl mx-4 my-4 px-2 py-2">
        <div className="flex items-center">
          <MissedPersonNameAndStatus
            missedPersonName="Albert Einstein"
            status="a missed person"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center lg:flex-row lg:justify-around sm:mt-8">
          <MissedPeronImage src={Einstein} alt="Albert Einstein" />
          <MissedPersonOtherData />
        </div>
      </div>
    </div>
  );
};

export default MissedPersonDetails;

import React from 'react';
import ArrowBack from '../../images/arrow-back.svg';
import { Link } from 'react-router-dom';

const MissedPersonNameAndStatus = ({ missedPersonName, status }) => {
  return (
    <div className="mx-auto">
      <div className="mr-2 text-xl sm:inline text-center">
        <button className="focus:outline-none">
          <Link to="/missing_people">
            {/* Note: here we will use React router to redirect to missed people page */}
            <img src={ArrowBack} alt="" className="w-10 h-10 sm:inline" />
          </Link>
        </button>
      </div>
      <p className="mx-2 text-3xl lg:text-4xl sm:inline">{missedPersonName}</p>
      <p className="ml-2 text-xl sm:inline text-gray-500 text-center">
        {status}
      </p>
    </div>
  );
};

export default MissedPersonNameAndStatus;

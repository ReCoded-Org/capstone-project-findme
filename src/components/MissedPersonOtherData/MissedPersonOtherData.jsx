import React from 'react';

import RowOfData from '../RowOfData/RowOfData';

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
          <RowOfData label="Location of lose:" data="Sana'a" />
          <RowOfData label="Lost since:" data="November 3, 2020" />
          <RowOfData label="Age:" data="5" />
          <RowOfData label="Notes:" data="Sana'a" />
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Last place seen:" data="Alsafiah" />
          <RowOfData label="Last update:" data="November 3, 2020" />
          <RowOfData label="Gender:" data="male" />
          <RowOfData label="Special situation:" data="some infos" />
        </div>
      </div>

      {/* Poster and Contact Info Section */}
      <div className="my-4">
        <p className="text-gray-500">Poster and Contact Info</p>
        <hr className="x" />
      </div>
      <div className="flex flex-col text-sm sm:flex-row lg:text-md mb-8 sm:mb-20">
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Name:" data="Einstein" />
          <RowOfData label="Phone number:" data="777755555" />
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData label="Realtionship:" data="father" />
          <RowOfData label="Phone number 2:" data="777755555" />
        </div>
      </div>
    </div>
  );
};

export default MissedPersonOtherData;

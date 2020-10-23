import React, { useState } from 'react';
import userImage from '../images/profile-svg.svg';

const MissingPersonCard = ({ userName, lostSince }) => {
  const [footerCard, setfooterCard] = useState(0);

  const beforeHover = (
    <div
      className="rounded-t-lg rounded-b-lg px-6 my-4 mx-auto"
      onMouseEnter={() => setfooterCard(1)}
      onMouseLeave={() => setfooterCard(0)}
    >
      <div className="max-w-xs rounded overflow-hidden shadow-lg sm:self-center sm:mx-auto">
        <img
          className="hover:opacity-25 cursor-pointer"
          src={userImage}
          alt="username"
        />
        <div className="px-6 py-4 cursor-pointer">
          <div className="font-bold text-xl mb-2">{userName}</div>
          <p className="text-base">{`Lost sice: ${lostSince}`}</p>
        </div>
      </div>
    </div>
  );
  const afterHover = (
    <div
      className="rounded-t-lg rounded-b-lg px-6 my-4 mx-auto"
      onMouseEnter={() => setfooterCard(1)}
      onMouseLeave={() => setfooterCard(0)}
    >
      <div className="max-w-xs rounded overflow-hidden shadow-lg sm:self-center sm:mx-auto">
        <img
          className="hover:opacity-25 cursor-pointer"
          src={userImage}
          alt="username"
        />
        <div className="px-6 py-4 cursor-pointer bg-blue-700 text-white">
          <div className="font-bold text-xl mb-2">{userName}</div>
          <div className="flex justify-between md:flex-col lg:flex-row xl:flex-row bg-blue-700 ">
            <div className="items-center mt-2">
              <p className="md:mb-2 mx-4">129 veiws</p>
            </div>
            <div>
              <a href="#">
                <button className="border-2 border-white hover:bg-blue-700 text-white py-2 px-4 mb-2 rounded-full">
                  More Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  let whithHover;

  if (footerCard === 0) {
    whithHover = beforeHover;
  } else {
    whithHover = afterHover;
  }

  return whithHover;
};

export default MissingPersonCard;

//

{
  /*<div className="flex justify-between md:flex-col lg:flex-row xl:flex-row bg-blue-700 ">
  <div className="items-center mt-2">
    <p className="md:mb-2 mx-4">129 veiws</p>
  </div>
  <div>
    <a href="#">
      <button className="border-2 border-white hover:bg-blue-700 text-white py-2 px-4 mb-2 rounded-full">
        More Details
      </button>
    </a>
  </div>
</div>;
*/
}

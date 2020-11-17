import React, { useState } from 'react';
import userImage from '../../images/profile-svg.svg';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

const MissingPersonCard = ({ cardInfo, i }) => {
  const [footerCard, setfooterCard] = useState(0);

  const beforeHover = (
    <div
      className="rounded-3xl mx-5 my-3 mx-auto md:mx-4"
      onMouseEnter={() => setfooterCard(1)}
      onMouseLeave={() => setfooterCard(0)}
    >
      <div className="shadow-lg rounded-3xl max-w-xs overflow sm:self-center sm:mx-auto max-h-full">
        <div className="relative">
          {cardInfo.lostFamily ? (
            <span className="absolute inline-block pr-4 pl-6 py-2 font-bold md:pr-2 md:pl-3 md:py-1 lg:pl-6 lg-pr-4 lg:py-2 bg-blue-700 right-0 text-white rounded-l-3xl mt-8 md:mt-4 lg:mt-8">
              Found
            </span>
          ) : (
            <span className="absolute inline-block pr-4 pl-10 py-2 font-bold md:pr-2 md:pl-5 md:py-1 lg:pl-8 lg-pr-4 lg:py-2 bg-blue-700 right-0 text-white rounded-l-3xl mt-8 md:mt-4 lg:mt-8">
              Lost
            </span>
          )}

          <img
            className="opacity-1 cursor-pointer h-64"
            src={cardInfo.img}
            alt={`${cardInfo.userName} image`}
            width={300}
          />
        </div>
        <div className="px-6 py-4 text-left">
          <div className="font-bold text-xl mb-2">{cardInfo.userName}</div>
          <p className="text-base font-light">{`Lost since: ${cardInfo.lostSince}`}</p>
        </div>
      </div>
    </div>
  );
  const afterHover = (
    <div
      className="rounded-3xl mx-5 my-3 mx-auto md:mx-4"
      onMouseEnter={() => setfooterCard(1)}
      onMouseLeave={() => setfooterCard(0)}
    >
      <div className="shadow-lg rounded-3xl max-w-xs overflow sm:self-center sm:mx-auto">
        <div className="relative">
          {cardInfo.lostFamily ? (
            <span className="absolute inline-block pr-4 pl-6 py-2 font-bold md:pr-2 md:pl-3 md:py-1 lg:pl-6 lg-pr-4 lg:py-2 bg-blue-700 right-0 text-white rounded-l-3xl mt-8 md:mt-4 lg:mt-8">
              Found
            </span>
          ) : (
            <span className="absolute inline-block pr-4 pl-10 py-2 font-bold md:pr-2 md:pl-5 md:py-1 lg:pl-8 lg-pr-4 lg:py-2 bg-blue-700 right-0 text-white rounded-l-3xl mt-8 md:mt-4 lg:mt-8">
              Lost
            </span>
          )}
          <p className="absolute bottom-0 mb-20 mx-10 md:m-auto md:text-xs md:mx-2 md:mb-8 md:leading-3 lg:mx-10 lg:text-base lg:mb-20 lg:leading-tight	">
            {cardInfo.description}
          </p>
          <div className="absolute bottom-0 ml-8 mb-2 md:text-xs md:ml-2 md:mb-1 lg:text-base lg:ml-8 lg:mb-2">
            <span className="mr-8 md:mr-2 lg:mr-8">Age: {cardInfo.age}</span>
            <span>Location: Sana'a</span>
          </div>
          <img
            className="opacity-25 cursor-pointer h-64"
            src={cardInfo.img}
            alt={`${cardInfo.userName} image`}
            width={300}
          />
        </div>
        <div className="px-6 py-5 md:py-1 lg:py-5 cursor-pointer bg-blue-700 text-white rounded-b-3xl">
          {/*<div className="font-bold text-xl mb-2">{userName}</div>*/}
          <div className="flex justify-between md:flex-col lg:flex-row xl:flex-row bg-blue-700 ">
            <div className="items-center mt-2">
              <p className="md:mb-2 mx-4 font-semibold">
                <VisibilityIcon /> {cardInfo.views}
              </p>
            </div>
            <div className=" ">
              <Link to="/missing_people_details">
                <button
                  className="focus:outline-none
                border-2 border-white font-semibold  hover:bg-blue-600 text-white py-2 px-4 mb-2 rounded-full"
                >
                  More Details
                </button>
              </Link>
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

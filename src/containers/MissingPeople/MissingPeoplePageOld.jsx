import React, { useState } from 'react';
import MissingPersonCard from '../../components/MissingPersonCard';
import Api from './api';

const MissingPeoplePage = () => {
  const [data, setData] = useState(Api);
  // console.log(data);

  return (
    <div className="">
      <h2 className="font-normal tracking-wider text-4xl mb-10 mx-4">
        Missing People
      </h2>
      <div className="flex flex-wrap">
        {data.length === 0 ? (
          <h2 className="flex-auto text-center">not found results</h2>
        ) : (
          data.map((item, index) => (
            <MissingPersonCard key={item.id} cardInfo={item} i={index} />
          ))
        )}
      </div>
      <div className="">
        <button className="mx-auto my-10 py-2 px-4 align-center text-blue-500 border-solid border-2 border-blue-500 rounded-3xl hover:text-blue-600 hover:border-blue-600 block font-light">
          <a href="#">
            <span className="">⬇ Show More</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default MissingPeoplePage;

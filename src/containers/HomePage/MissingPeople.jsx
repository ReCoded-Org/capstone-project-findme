import React, { useState } from 'react';
import MissingPersonCard from '../../components/MissingPersonCard/MissingPersonCard';
import Api from './api';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const HomePage = ({ missingPeople }) => {
  // storing api data in the state
  const [data, setData] = useState(Api);
  console.log(data);

  return (
    <div className="lg:mx-16 md:mt-8">
      <div>
        <h2 className="font-normal tracking-wider text-4xl mx-6 text-left">
          {missingPeople}
        </h2>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex-col sm:items-center xl:justify-center">
          {data.map((item, index) => (
            <MissingPersonCard key={item.id} cardInfo={item} i={index} />
          ))}
        </div>
        <div className="mr-4 my-10 mt-6 text-right text-blue-500">
          <Link to="/missing_people">
            <span className="">
              More Missing People <ArrowForwardIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import MissingPersonCard from '../../components/MissingPersonCard/MissingPersonCard';
//import Api from './api';
import { Link } from 'react-router-dom';
import useFirestore from '../../hooks/useFirestore'

const HomePage = ({ missingPeople }) => {
  const { docs } = useFirestore('images');

  // storing api data in the state
  const [data, setData] = useState(docs);
  console.log(data);

  return (
    <div className="">
      <h2 className="font-normal tracking-wider text-4xl mb-10 mx-4">
        {missingPeople}
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex-col sm:items-center">
        {docs && docs.map((item, index) => (
          index<4 ?
          <MissingPersonCard key={item.id} cardInfo={item} i={index} />
          :
          ''
        ))}
      </div>
      <p className="mr-10 my-10 text-right text-blue-500">
        <Link to="/missing_people">
          <span className="">More Missing People &rarr;</span>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;

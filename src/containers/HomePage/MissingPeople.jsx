import React from 'react';
import MissingPersonCard from '../../components/MissingPersonCard';

const HomePage = ({ missingPeople }) => (
  <div className="">
    <h2 className="font-normal tracking-wider text-4xl mb-10 mx-4">
      {missingPeople}
    </h2>
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex-col sm:items-center">
      <MissingPersonCard userName="John Doe" lostSince="7-7-2017" />
      <MissingPersonCard userName="John Doe" lostSince="7-7-2017" />
      <MissingPersonCard userName="John Doe" lostSince="7-7-2017" />
      <MissingPersonCard userName="John Doe" lostSince="7-7-2017" />
    </div>
    <p className="mr-10 my-10 text-right text-blue-500">
      <a href="#">
        <span className="">More Missing People &rarr;</span>
        {/** this utf for -> [right arrow icon] */}
      </a>
    </p>
  </div>
);

export default HomePage;

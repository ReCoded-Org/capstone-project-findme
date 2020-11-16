import React, { useState } from 'react';
import MissingPersonCard from '../../components/MissingPersonCard/MissingPersonCard';
import Api from './api';
import { Link } from 'react-router-dom';

import {useTranslation} from "react-i18next";


const HomePage = ({ missingPeople }) => {
  // storing api data in the state
  const [data, setData] = useState(Api);
  console.log(data);

  // Translation
  const [t, i18n] = useTranslation('common');

  return (
    <div className="">
      <h2 className="font-normal tracking-wider text-4xl mb-10 mx-4">
        {missingPeople}
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex-col sm:items-center">
        {data.map((item, index) => (
          <MissingPersonCard key={item.id} cardInfo={item} i={index} />
        ))}
      </div>
      <p className="mr-10 my-10 text-right text-blue-500">
        <Link to="/missing_people">
          <span className="">{t('translation.moreMissingPeopleLink')} &larr;</span>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;

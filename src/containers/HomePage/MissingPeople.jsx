import React, { useState } from 'react';
import MissingPersonCard from '../../components/MissingPersonCard/MissingPersonCard';
//import Api from './api';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useFirestore from '../../hooks/useFirestore';

import { useTranslation } from 'react-i18next';

const HomePage = ({ missingPeople }) => {
  const { docs } = useFirestore('images');

  // storing api data in the state
  const [data, setData] = useState(docs);
  console.log(data);

  // Translation
  const [t, i18n] = useTranslation('common');

  return (
    <div className="lg:mx-16 md:mt-8">
      <h2 className="font-normal tracking-wider text-4xl mx-6 text-left">
        {missingPeople}
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex-col sm:items-center xl:justify-center">
        {docs &&
          docs.map((item, index) =>
            index < 4 ? (
              <Link key={item.id}
              to={`/missing_people_details/${item.id}`}
                >
              <MissingPersonCard key={item.id} cardInfo={item} i={index} />
            
            </Link>
             ) : 
              '')
            
          }
      </div>
      <p className="mr-4 my-10 mt-6 text-right text-blue-500">
        <Link to="/missing_people">
          <span className="">
            {t('translation.moreMissingPeopleLink')} &larr;
          </span>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;

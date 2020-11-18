import React from 'react';
import Button from '../../components/Button/Button';
import DescriptionImage from '../../images/undraw_web_search_eetr.svg';
import SearchIcon from '../../images/Path.svg';
import { Link } from 'react-router-dom';

import {useTranslation} from "react-i18next";


const WebsiteDescription = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="flex justify-around flex-col-reverse mt-4 mb-16 mx-8 sm:flex-row flex-grow sm-flex-grow-0">
      <div className="sm:w-2/5 bg-ahmed-100 content-between text-left">
        <div>
          <h1 className="text-4xl">{t('translation.lostSomeone')}</h1>
          <h4 className="text-3xl text-blue-500 font-medium">
          {t('translation.searchHereToFind')}
          </h4>
          <p>
          {t('translation.websiteBrief')}
          </p>
        </div>
        <div className="flex justify-center mt-4 md:justify-end">
          <Link to="/missing_people">
            <Button icon={SearchIcon} />
          </Link>
        </div>
      </div>
      <div className="sm:w-2/5">
        <img src={DescriptionImage} alt="icon" />
      </div>
    </div>
  );
};

export default WebsiteDescription;

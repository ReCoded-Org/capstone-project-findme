import React from 'react';

import RowOfData from '../RowOfData/RowOfData';
import Data from '../../Data';

import { useTranslation } from 'react-i18next';

const MissedPersonOtherData = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="lg:w-2/4 ml-4 lg:ml-0">
      <div className="mb-4">
        <p className="text-gray-500 text-left">
          {t('translation.informations')}
        </p>
        <hr className="x" />
      </div>
      {/* Informations Section */}
      <div className="flex flex-col text-sm sm:flex-row lg:text-md">
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData
            label={t('translation.locationOfLossD')}
            data={Data[1].locationOfLose}
          />
          <RowOfData
            label={t('translation.lostSinceD')}
            data={Data[1].lostSince}
          />
          <RowOfData label={t('translation.ageD')} data={Data[1].age} />
          <RowOfData label={t('translation.notesD')} data={Data[1].notes} />
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData
            label={t('translation.lastPlaceSeenD')}
            data={Data[1].lastPlaceSeen}
          />
          <RowOfData
            label={t('translation.lastUpdateD')}
            data={Data[1].lastUpdate}
          />
          <RowOfData label={t('translation.genderD')} data={Data[1].gender} />
          <RowOfData
            label={t('translation.specialSituationD')}
            data={Data[1].specialSituation}
          />
        </div>
      </div>

      {/* Poster and Contact Info Section */}
      <div className="my-4">
        <p className="text-gray-500 text-left">
          {t('translation.posterAndContactInfo')}
        </p>
        <hr className="x" />
      </div>
      <div className="flex flex-col text-sm sm:flex-row lg:text-md mb-8 sm:mb-20">
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData
            label={t('translation.nameD')}
            data={Data[1].contactName}
          />
          <RowOfData
            label={t('translation.phoneNumberD')}
            data={Data[1].phoneNumber}
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/4">
          <RowOfData
            label={t('translation.relationshipD')}
            data={Data[1].realtionship}
          />
          <RowOfData
            label={t('translation.phoneNumber2D')}
            data={Data[1].phoneNumber2}
          />
        </div>
      </div>
    </div>
  );
};

export default MissedPersonOtherData;

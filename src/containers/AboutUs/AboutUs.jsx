import React, { Component } from 'react';
import './../../styles/main.css';
import AboutUsSVG from './../../images/About Us.svg';

import LinkedInIcon from './../../images/social/icon-linkedin.svg';
import GitHubIcon from './../../images/social/icon-github.svg';
import Website from './../../images/icons/icon-website.svg';

import { useTranslation } from 'react-i18next';

const AboutUs = (props) => {
  const [t, i18n] = useTranslation('common');
  return (
    <div>
      <div className="bg-gray-100 p-12 lg:flex lg:justify-center">
        <div className="lg:w-1/2">
          <div className="h-auto bg-cover m-auto lg:m-0 lg:rounded-lg lg:h-full max-w-sm">
            <img
              className="lg:w-5/12 w-full h-auto lg:absolute lg:mt-40"
              src={AboutUsSVG}
            ></img>
          </div>
        </div>
        <div className="m-auto py-12 lg:p-0 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-3xl text-black font-bold">
            {t('translation.aboutFindMe')}
          </h2>
          <p className="mt-4 text-black text-left">
            {t('translation.aboutFindMePara')}
          </p>
          <br></br>
          <br></br>
          <h2 className="text-3xl text-black font-bold">
            {t('translation.ourStory')}
          </h2>
          <p className="mt-4 text-black text-left">
            {t('translation.aboutTheWebsiteParagraph')}
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.abdulateefAlradaee')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/Abdulateef-Muhammad">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abdulateef-al-radaee-8101171a1/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.ahmedAlMajidi')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/AhmedAl-Majidi">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-al-majidi-0b90901ba/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.asmaKolaib')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/as-kolaib">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/asma-kolaib-31514a199/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.basilHomadi')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/BasilHomadi">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/basil-homadi-4471a0198/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.sondosAhmed')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/SondosAhmed">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sondos-alshami/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.watheqAlshowaiter')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="http://watheq.xyz/">
                <img
                  src={Website}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a target="_blank" href="https://github.com/WatheqAlshowaiter">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/watheq-show/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <br />
          <br />
          <h2 className="text-3xl text-black font-bold">
            {t('translation.aBigThanksFor')}
          </h2>
          <p className="mt-4 text-black text-left">
            {t('translation.aBigThanksForPara')}
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.maher')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/maqalaqil">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/maher-al-aqil-56895894/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.salah')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/tech-chieftain">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/salah-aldhaferi/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.muhanned')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/MuhannedNoman">
                <img
                  src={GitHubIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhannednoman/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              {t('translation.mohamed')}
            </span>
            <span className="block text-right w-1/3 box-border">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamedalaoudi/"
              >
                <img
                  src={LinkedInIcon}
                  className="inline ml-2 h-5 hover:opacity-75"
                ></img>
              </a>
            </span>
          </p>
          <p className="mt-4 text-black text-left">
            {t('translation.andAllRecodedTeam')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

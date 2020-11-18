import React from 'react';

// import Router
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import footer.scss
import './footer.scss';

// import img svg
import email from '../../images/footer/envelope.svg';
import twitter from '../../images/footer/twitter.svg';
import facebook from '../../images/footer/facebook.svg';
import instagram from '../../images/footer/instagram.svg';
import bg from '../../images/footer/bg.svg';

import { useTranslation } from 'react-i18next';

// Footer Section
const Footer = () => {
  // Translation
  const [t, i18n] = useTranslation('common');
  return (
    <div>
      <>
        <div className="footer" data-testid="footer">
          <div className="container m-auto p-0  md:p-6   md:px-10 lg:px-24 ">
            <div className="  mb-8 p-2 w-full flex flex-wrap  pt-12">
              {/* About Section */}
              <div className="relative  w-full h-full md:w-1/2 lg:w-1/2  px-12 md:pl-12 text-left">
                <img
                  src={bg}
                  alt="bg"
                  width="62%"
                  height="50%"
                  className="absolute right-0  p-8  pt-6 md:pt-1"
                />
                <h1 className="  text-white text-xl font-semibold ">
                  {t('translation.aboutUs')}
                </h1>
                <p className="  text-white ">
                  {' '}
                  {t('translation.footerWebsiteBrief')}
                </p>
              </div>
              <div className="   w-full md:w-1/2 lg:w-1/2  md:pl-12 px-12    mt-4  md:mt-0 text-left">
                {/* links */}
                <h3 className="text-white font-semibold">
                  {t('translation.links')}
                </h3>
                <div className="flex pl-2 ">
                  <div className="links  pr-10 ">
                    <LinkFooter pathLink="/" nameLink={t('translation.home')} />
                    <LinkFooter
                      pathLink="/missing_people"
                      nameLink={t('translation.missingPeople')}
                    />
                    <LinkFooter
                      pathLink="/about_us"
                      nameLink={t('translation.aboutUs')}
                    />
                  </div>
                  <div className="links  ">
                    <LinkFooter
                      pathLink="/missing_people"
                      nameLink={t('translation.search')}
                    />
                    <LinkFooter
                      pathLink="/add_post"
                      nameLink={t('translation.post')}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* footerButton */}
            <div className=" mb-8 p-2 w-full flex flex-wrap mt-4 ">
              {/* Email */}
              <div className=" w-full md:w-1/2 lg:w-1/2  md:pl-12 px-12 text-white text-left">
                <Icon
                  path="mailto:findme@gmail.com"
                  srcName={email}
                  srcAlt="email"
                />
                findme@gmail.com
              </div>
              {/* Social Media */}
              <div className=" w-full  mt-4 md:w-1/2 md:mt-0 lg:w-1/2  md:pl-12  px-12 pr-0 text-left ">
                <p className="text-white uppercase	">
                  {' '}
                  <span className="mr mr-3 md:mr-5">
                    {t('translation.followUs')}{' '}
                  </span>
                  <Icon
                    path="https://facebook.com"
                    srcName={facebook}
                    srcAlt="facebook"
                  />
                  <Icon
                    path="https://twitter.com/"
                    srcName={twitter}
                    srcAlt="twitter"
                  />
                  <Icon
                    path="https://www.instagram.com/"
                    srcName={instagram}
                    srcAlt="instagram"
                  />
                </p>
              </div>
            </div>
            {/* copyRight */}
            <div className="  text-white p-3 text-center border-t-solid border-t border-t-gray-600">
              <p>
                Designed by Recoded &copy; {new Date().getFullYear()} All rights
                are reserved to FindMe
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
const LinkFooter = (props) => {
  return (
    <Link
      to={props.pathLink}
      className="block text-white text-base hover:opacity-75 "
    >
      {props.nameLink}
    </Link>
  );
};
const Icon = (props) => {
  return (
    <a href={props.path} target="_blank">
      <img
        src={props.srcName}
        alt={props.srcAlt}
        className="icon mr-5 md:mr-5 hover:opacity-75 "
      />
    </a>
  );
};
export default Footer;

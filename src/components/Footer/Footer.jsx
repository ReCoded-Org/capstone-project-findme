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

// Footer Section
const Footer = () => {
  return (
    <div>
      <Router>
        <div className="footer" data-testid="footer">
          <div className="container m-auto p-0  md:p-6   md:px-10 lg:px-24 ">
            <div className="  mb-8 p-2 w-full flex flex-wrap  pt-12">
              {/* About Section */}
              <div className="relative  w-full h-full md:w-1/2 lg:w-1/2  px-12 md:pl-12">
                <img
                  src={bg}
                  alt="bg"
                  width="62%"
                  height="50%"
                  className="absolute right-0  p-8  pt-6 md:pt-1"
                />
                <h1 className="  text-white text-xl font-medium">About us</h1>
                <p className="  text-white ">
                  {' '}
                  Our website is a service that connects lost people with anyone
                  who is looking for them. We have two scenarios on our website
                  of loss, the first type is a lost person and the other type is
                  people who are found but missing their relatives or anyone
                  that takes care of them.
                </p>
              </div>
              <div className="   w-full md:w-1/2 lg:w-1/2  md:pl-12 px-12    mt-4  md:mt-0">
                {/* links */}
                <h3 className="text-white">links</h3>
                <div className="flex pl-2">
                  <div className="links  pr-10 ">
                    <LinkFooter pathLink="/" nameLink="Home" />
                    <LinkFooter
                      pathLink="/missing_people"
                      nameLink="Missingpeople"
                    />
                    <LinkFooter pathLink="/about_us" nameLink="About" />
                  </div>
                  <div className="links  ">
                    <LinkFooter pathLink="/search" nameLink="Search" />
                    <LinkFooter pathLink="/add_post" nameLink="Post" />
                    <LinkFooter
                      pathLink="/privacy_policy"
                      nameLink="Privacy Policy"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* footerButton */}
            <div className=" mb-8 p-2 w-full flex flex-wrap mt-4 ">
              {/* Email */}
              <div className=" w-full md:w-1/2 lg:w-1/2  md:pl-12 px-12 text-white">
                <Icon
                  path="mailto:findme67@gmail.com"
                  srcName={email}
                  srcAlt="email"
                />
                findme67@gmail.com
              </div>
              {/* Social Media */}
              <div className=" w-full  mt-4 md:w-1/2 md:mt-0 lg:w-1/2  md:pl-12  px-12 pr-0  ">
                <p className="text-white uppercase	">
                  {' '}
                  <span className="mr mr-3 md:mr-5">follow us : </span>
                  <Icon path="#" srcName={facebook} srcAlt="facebook" />
                  <Icon path="#" srcName={twitter} srcAlt="twitter" />
                  <Icon path="#" srcName={instagram} srcAlt="instagram" />
                </p>
              </div>
            </div>
            {/* copyRight */}
            <div className="  text-white p-3 text-center border-t-solid border-t border-t-gray-600">
              <p>
                Desiged by Recoded &copy;2020 Alright are reseved to findme{' '}
              </p>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};
const LinkFooter = (props) => {
  return (
    <Link
      to={props.pathLink}
      className="block text-white text-base hover:opacity-75 underline"
    >
      {props.nameLink}
    </Link>
  );
};
const Icon = (props) => {
  return (
    <a href={props.path}>
      <img
        src={props.srcName}
        alt={props.srcAlt}
        className="icon mr-5 md:mr-5 hover:opacity-75 "
      />
    </a>
  );
};
export default Footer;

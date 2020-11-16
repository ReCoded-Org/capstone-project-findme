import React from 'react';
import ContactUsForm from '../../components/ContactUs/ContactUsForm';
import contact from '../../images/contact.svg';
import GridBg from '../../images/repeat-grid-4.svg';
//This is the container of Contact Us page
//It contans a vector and the form components
//It imports ContactUsForm react components which grap all the comonents of contact us form
export default function ContactUs() {
  return (
    <div className="items-center xl:h-screen lg:h-screen sm:h-auto h-auto xl:h-screen lg:h-screen xl:pl-12 xl:pr-12 lg:pl-10 lg:pr-10 sm:pl-8 sm:pr-8 pl-4 pr-4">
      <div className="flex  xl:flex-row lg:flex-row  flex-col sm:flex-col pl-12 pr-12 xl:space-x-8 lg:space-x-4 space-y-8 sm:space-y-8 ">
        <div className="xl:w-3/5 pt-8 xl:pt-16 lg:pt-20 h-full flex-1 xl:pr-4 lg:pr-4 xl:pr-8 lg:pr-8">
          <img src={contact} alt="contact us" className=""></img>
          <img src={GridBg} alt="" className="absolute"></img>
        </div>
        <div className="flex-3 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full w-full h-full pl-4 pr-8">
          <img
            src={GridBg}
            alt=""
            className="absolute top-0 right-0 pr-12 "
          ></img>

          <p className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-8 font-bold ">
            Let's talk
          </p>
          <ContactUsForm className="h-auto " />
        </div>
      </div>
    </div>
  );
}

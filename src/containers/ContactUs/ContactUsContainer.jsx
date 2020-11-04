import React from 'react'
import ContactUsForm from '../../components/ContactUs/ContactUsForm'
import contact from '../../images/contact.svg'
export default function ContactUs() {
    return (
    <div className='h-fullScreen sm:h-fullScreen xl:h-screen lg:h-screen xl:pl-12 xl:pr-12 lg:pl-10 lg:pr-10 sm:pl-8 sm:pr-8 pl-4 pr-4'>
        <div className='flex xl:flex-row lg:flex-row  flex-col sm:flex-col pl-12 pr-12 space-x-8 '>
            <div className='pt-8 xl:pt-12 lg:pt-16 h-full flex-1 pr-4 pl-8' >
                 <img src={contact} alt='contact us' className=''></img>
            </div>
            <div className='flex-3 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full w-full h-full pl-4 pr-8'>
                <p className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-xl m-8 font-bold ">Let's talk</p>
                <ContactUsForm className='h-auto ' />
            </div>
        </div>
    </div>
    )
}

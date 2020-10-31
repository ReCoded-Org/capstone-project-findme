import React from 'react'
//importing icons from image folder
import qoute from '../../../src/images/Quote.svg'
//we used CSS file to cusomize its styles 
import './test.css'

export default function Card({cardInfo,i}) {
   // console.log({this.props.cardInfo})
   //Tailwind classes are used to style the code elements
   //test.css is used to customize slider buttons classes properties 
   // Each card in the slider will have image, header, and paragragh
   //data is recieved as props and displayed in the card 
    return (
        <div style={ cardContainer2} className='bg-findMe p-0 m-0 justify-items-center flex flex-col items-center  sm:flex-row-reverse '>
            <div className='p-4 xl:h-full1 xl:w-3/4 lg:w-3/4 lg:h-full11 md:h-full2 md:w-3/4 sm:w-3/4 sm:h-full3 h-full4 w-full flex-1   rounded-l-3xl rounded-r-3xl  ' >
                <img src={cardInfo.img}  alt='card ' className=' object-cover h-full w-full rounded-l-3xl rounded-r-3xl'/>
            </div>
            <div className='items-center flex flex-col items-center  flex-1 sm:items-start w:3/4  pt-0'>
                <div className='flex space-x-1 flex-1  self-end flex sm:mr-8 sm:mt-8   '>
                    <img src={qoute} alt='flex-1 quotes icons' className='flex-1 pl-10 pt-1 md:w-16 md:h-16 xl:w-20 xl:h-20 sm:pl-10 lg:w-20 lg:h-20 w-16 h-16 '></img>
                    <img src={qoute} alt='flex-1 quotes icons' className='flex-1 pr-10 pt-1  md:w-16 md:h-16  lg:w-20 lg:h-20 xl:w-20 xl:h-20 w-16 h-16 sm:pr-10 '></img>

                </div>
                <h1 className='pb-4 text-blue-500 sm:text-base md:text-base self-center sm:self-start xl:text-2xl lg:text-2xl   flex-1 items-start bold font-bold '>{cardInfo.head}</h1>
                <p className='flex-1 sm:left text-center sm:text-left leading-normal sm:leading-snug md:leading-snug lg:leading-loose xl:leading-loose lg:text-base xl:text-base md:text-sm sm:text-xs text-xs  w-4/5 xl:w-3/4	'>{cardInfo.para}</p>
            </div>
        </div>
    )
}

const cardContainer2 = {
    paddingLeft: '5%',
    paddingRight: '5%',
    
}
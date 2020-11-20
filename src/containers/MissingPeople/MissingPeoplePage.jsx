import React, { useState, useEffect, useRef } from 'react';
// import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import MissingPersonCard from '../../components/MissingPersonCard/MissingPersonCard';
import Model from 'react-modal'
import { ReactComponent as MyIcon } from './repeat-grid-4.svg';
import Search from '../../components/Search/Search'
import './style.css';
import NiceButton from '../../components/LoadingButton/NiceButton';
import '../../components/LoadingButton/style.css';
import useFirestore from '../../hooks/useFirestore'
import { Link, Route } from 'react-router-dom';
import { getSearchInfo } from '../../components/Search/searchInfo'
import {getCurrentDate} from '../../components/Search/helpers'
const MissingPeoplePage = ({searchInfo, searched}) => {
  const ITEMSTOSHOW = 8;
  const { docs } = useFirestore('images');
  const [data, setData] = useState([]); // maybe set the initial value later
  const [visible, setVisible] = useState(ITEMSTOSHOW);
  const [buttonText, setButtonText] = useState('⬇ Show More');
  const buttonTextRef = useRef('⬇ Show More');
  const [matched, setMatched] = useState([]);
  const [isSecondButtonLoading, setIsSecondButtonLoading] = useState(false);
  const [loadingSpeed, setLoadingSpeed] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const dynamicSearch =(entered)=>{

    if (searchInfo.goneMissingOn===getCurrentDate()&& !entered.isLookingForFamily  )
     return docs.filter(name=> name.values.fristName.toLowerCase().includes(entered.missingName.toLowerCase()))
    else if (searchInfo.goneMissingOn===getCurrentDate()&& entered.isLookingForFamily)
     return docs.filter(name=> name.values.fristName.toLowerCase().includes(entered.missingName.toLowerCase())
     && name.values.isLookingFor)
     else if (searchInfo.goneMissingOn!==getCurrentDate()&& !entered.isLookingForFamily)
     return docs.filter(name=>{ return name.values.lostSince.toLowerCase().includes(entered.goneMissingOn.toLowerCase()) && 
      name.values.fristName.toLowerCase().includes(entered.missingName.toLowerCase())
      
    })

     else 
     return docs.filter(name=>{  name.values.lostSince.toLowerCase().includes(entered.goneMissingOn.toLowerCase()) && 
      name.values.fristName.toLowerCase().includes(entered.missingName.toLowerCase()&& name.values.isLookingFor)
      
    })
    
    
    }
  useEffect(() => {
    if (isSecondButtonLoading) {
      setTimeout(() => {
        setIsSecondButtonLoading(false);
      }, 1000 / loadingSpeed);
    }
  }, [isSecondButtonLoading, loadingSpeed]);

  useEffect(() => {
    setData(() => docs);
  }, [docs]);
  const getData =()=>{

  }
  
  const showMoreItems = () => {
    if (visible > docs.length) {
      // setButtonText(() => 'complete');
      buttonTextRef.current = 'Complete';
    }

    // setButtonText(() => '...loading');
    // buttonTextRef.current = '..loading';
    setVisible((prevValue) => prevValue + ITEMSTOSHOW);
    // buttonTextRef.current = '⬇ Show More';
    // setButtonText(() => '⬇ Show More');
  };

  const showMoreItemsClick = () => {
    // buttonTextRef.current = '..loading';
    setTimeout(() => {
      showMoreItems();
    }, 1000);
    clearTimeout();
    // buttonTextRef.current = '⬇ Show More';
  };

  return (
    <div>

      <MyIcon className="absolute" />
      <MyIcon className="absolute right-0 mt-64 " />

      <div className="flex flex-wrap ml-8 xl:justify-center">
        {data.length === 0 ? (
          <h2 className="flex-auto text-center">not found results</h2>
        ) : (
          searched?(
           // dynamicSearch(docs, searchInfo)
           /*matched = docs && docs
            .filter((item, index) => (
             item.values.fristName.toLowerCase().includes(searchInfo.missingName.toLowerCase())

            ))*/
            dynamicSearch(searchInfo)
            .slice(0, visible)
            .map((item, index) => (
              //searchFun(item, searchInfo)==='nameSearch'?(
             // item.values.fristName.toLowerCase()===searchInfo.missingName ?
              <Link key={item.id}
              to={`/missing_people_details/${item.id}`}
                >
              <MissingPersonCard key={item.id}  id={item.id} cardInfo={item} i={index} />
              </Link>


                 )     )
                  
            )
            : (
            docs && docs
            .slice(0, visible)
            .map((item, index) => (
              <Link key={item.id}
              to={`/missing_people_details/${item.id}`}
                >
              <MissingPersonCard key={item.id}  id={item.id} cardInfo={item} i={index} />
              </Link>
            ))
            
        ))}
      </div>
      {console.log(visible, data.length)}
      <div className=" ">
        {visible > docs.length || visible > dynamicSearch(searchInfo).length ?  (
          ''
        ) : (
          <NiceButton
            className="focus:outline-none mx-auto my-10 py-2 px-4 align-center text-blue-500 border-solid border-2 border-blue-500 rounded-3xl hover:text-blue-600 hover:border-blue-600 block font-light "
            isLoading={isSecondButtonLoading}
            onClick={() => {
              setIsSecondButtonLoading(true);
              showMoreItemsClick();
            }}
          >
            ⬇ Show More
          </NiceButton>
        )}
      </div>
    </div>
  );
};

// const removeOutline = () => {};

export default MissingPeoplePage;

// const scrollButtonStyle = {
//   position: 'fixed',
//   right: '-100px',
//   bottom: '150px',
//   transition: 'right 0.5s',
//   cursor: 'pointer',
//   backgroundColor: '#2B6CB0',
//   color: 'white',
//   fontSize: '20px',
//   padding: '10px',
//   borderColor: '#2B6CB0ed', // #2B6CB0
//   border: 'none',
//   fill: 'white',
//   focus: 'focus:outline-none',
// };

// const scrollButtonTransition = {
//   right: '20px',
// };
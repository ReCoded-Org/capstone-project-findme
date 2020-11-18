import React, { useState, useEffect, useRef } from 'react';
// import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import MissingPersonCard from '../../components/MissingPersonCard/MissingPersonCard';
import { ReactComponent as MyIcon } from './repeat-grid-4.svg';
//import Search from '../../components/Search/Search'
import './style.css';
import NiceButton from '../../components/LoadingButton/NiceButton';
import '../../components/LoadingButton/style.css';
import useFirestore from '../../hooks/useFirestore'
import { Link } from 'react-router-dom';
//import { getSearchInfo } from '../../components/Search/searchInfo'
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

    setVisible((prevValue) => prevValue + ITEMSTOSHOW);
    
  };

  const showMoreItemsClick = () => {
    setTimeout(() => {
      showMoreItems();
    }, 1000);
    clearTimeout();
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
          
            dynamicSearch(searchInfo)
            .slice(0, visible)
            .map((item, index) => (
            
              <Link key={item.id}
              to={`/missing_people_details/${item.id}`}
                >
              <MissingPersonCard key={item.id}  id={item.id} cardInfo={item} i={index} />
              </Link>

                 )     )
                  
            )
            :
            docs && docs
            .slice(0, visible)
            .map((item, index) => (
              <Link key={item.id}
              to={`/missing_people_details/${item.id}`}
                >
              <MissingPersonCard key={item.id}  id={item.id} cardInfo={item} i={index} />
              </Link>
            ))
            )}
      </div>
      {console.log(visible, data.length)}
      <div className=" ">
        {visible > docs.length ? (
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


export default MissingPeoplePage;

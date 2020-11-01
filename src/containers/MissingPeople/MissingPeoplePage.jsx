import React, { useState, useEffect, useRef } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import MissingPersonCard from '../../components/MissingPersonCard';
import { ReactComponent as MyIcon } from './repeat-grid-4.svg';

import Api from './api';

const MissingPeoplePage = () => {
  const ITEMSTOSHOW = 8;

  const [data, setData] = useState([]); // maybe set the initial value later
  const [visible, setVisible] = useState(ITEMSTOSHOW);
  const [buttonText, setButtonText] = useState('⬇ Show More');
  const buttonTextRef = useRef('⬇ Show More');

  useEffect(() => {
    setData(() => Api);
  }, []);

  const showMoreItems = () => {
    if (visible > data.length) {
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
    setTimeout(() => {
      // buttonTextRef.current = '..loading';
      showMoreItems();
    }, 1000);
    clearTimeout();
  };

  return (
    <div>
      <MyIcon className="absolute" />
      <MyIcon className="absolute right-0 mt-64 " />

      <div className="flex flex-wrap ml-8">
        {data.length === 0 ? (
          <h2 className="flex-auto text-center">not found results</h2>
        ) : (
          data
            .slice(0, visible)
            .map((item, index) => (
              <MissingPersonCard key={item.id} cardInfo={item} i={index} />
            ))
        )}
      </div>
      {console.log(visible, data.length)}
      <div className="">
        {visible > data.length ? (
          <button
            // disabled
            className=" mx-auto my-10 py-2 px-4 align-center text-blue-500 border-solid border-2 border-blue-500 rounded-3xl hover:text-blue-600 hover:border-blue-600 block font-light "
            onClick={showMoreItemsClick}
          >
            <span className="">{buttonTextRef.current}</span>
          </button>
        ) : (
          <button
            className="mx-auto my-10 py-2 px-4 align-center text-blue-500 border-solid border-2 border-blue-500 rounded-3xl hover:text-blue-600 hover:border-blue-600 block font-light"
            onClick={showMoreItemsClick}
          >
            <span className="">{buttonTextRef.current}</span>
          </button>
        )}
      </div>

      <ScrollUpButton
        style={scrollButtonStyle}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      ></ScrollUpButton>
    </div>
  );
};

export default MissingPeoplePage;

const scrollButtonStyle = {
  position: 'fixed',
  right: '-100px',
  bottom: '150px',
  transition: 'right 0.5s',
  cursor: 'pointer',
  backgroundColor: '#2B6CB0',
  color: 'white',
  fontSize: '20px',
  padding: '10px',
  borderColor: '#2B6CB0ed', // #2B6CB0
  border: 'none',
  fill: 'white',
};

// const scrollButtonTransition = {
//   right: '20px',
// };

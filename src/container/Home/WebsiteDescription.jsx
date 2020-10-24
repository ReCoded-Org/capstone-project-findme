import React from 'react';
import Button from '../../components/Button';
import DescriptionImage from '../undraw_web_search_eetr (2).svg';
import SearchIcon from '../Path 2791.svg';

const WebsiteDescription = () => {
  const handleClick = (props) => {
    //props.history.push("/MissingPeople")
  };
  return (
    <div className="flex justify-around bg-gray-200 flex-col-reverse m-4 sm:m-0 sm:flex-row flex-grow sm-flex-grow-0 ">
      <div className="sm:w-2/5 bg-ahmed-100">
        <h1 className="text-4xl">Lost Someone?</h1>
        <h4 className="text-3xl text-blue-400">Search here to find him/here</h4>
        <p>
          Our website is a service that connects lost people with anyone who is
          looking for them. We have two scenarios on our website of loss, the
          first type is a lost person and the other type is people who are found
          but missing their relatives or anyone that takes care of them.
        </p>
        <div className="flex justify-end">
          <Button
            buttonName="Find Me"
            onClickMethod={handleClick}
            icon={SearchIcon}
          />
        </div>
      </div>
      <div className="sm:w-2/5">
        <img src={DescriptionImage} alt="icon" />
      </div>
    </div>
  );
};

export default WebsiteDescription;

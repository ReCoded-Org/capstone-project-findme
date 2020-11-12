import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className="rounded-full px-4 py-2 bg-gradient-to-r from-teal-200 via-blue-500 to-blue-700 text-white text-xl hover:opacity-75">
        <div className="flex flex-row-reverse justify-center">
          {props.buttonName}
          <img src={props.icon} alt={props.alt} className="mr-8" />
        </div>
      </button>
    </div>
  );
};

export default Button;

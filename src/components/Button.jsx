import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        className="rounded-full w-40 h-12 bg-gradient-to-r from-blue-400 to-blue-700 text-white"
        onClick={props.onClickMethod}
      >
        <div className="flex flex-row-reverse justify-center">
          {props.buttonName}
          <img src={props.icon} alt="" />
        </div>
      </button>
    </div>
  );
};

export default Button;

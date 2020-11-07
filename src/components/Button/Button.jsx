import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="rounded-full w-48 h-16 bg-gradient-to-r from-blue-400 to-blue-700 text-white text-xl">
        <div className="flex flex-row-reverse justify-center">
          {props.buttonName}
          <img src={props.icon} alt={props.alt} className="mr-8" />
        </div>
      </button>
    </div>
  );
};

export default Button;

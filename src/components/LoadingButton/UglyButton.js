import React from "react";

import Loader from "./Loader";

export default function UglyButton({ isLoading, children, ...props }) {
  return (
    <button className="button" {...props}>
      <div>{isLoading ? <Loader /> : children}</div>
    </button>
  );
}

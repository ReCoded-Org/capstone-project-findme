import React from 'react';

const RowOfData = ({ label, data }) => {
  return (
    <div>
      <p className="table-cell text-gray-700 py-1 lg:py-2 text-sm font-semibold">
        {label}
      </p>
      <p className="table-cell text-gray-700 pl-2 py-1 lg:py-2 text-sm">
        {data}
      </p>
    </div>
  );
};

export default RowOfData;
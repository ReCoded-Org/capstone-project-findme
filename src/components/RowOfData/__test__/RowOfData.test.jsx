import React from 'react';
import ReactDOM from 'react-dom';
import RowOfData from '../../RowOfData/RowOfData';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RowOfData />, div)
})
import React from 'react';
import ReactDOM from 'react-dom';
import MissedPersonOtherData from '../../MissedPersonOtherData/MissedPersonOtherData';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MissedPersonOtherData />, div)
})
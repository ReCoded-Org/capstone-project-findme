import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './../AboutUs';

import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutUs></AboutUs>, div);
});


it('matches snapshot', () => {
  const tree = renderer.create(<AboutUs></AboutUs>).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RouterPages from './../RouterPages';


afterEach(cleanup);
it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouterPages />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer.create(<RouterPages/> ).toJSON();
  expect(tree).toMatchSnapshot();
});
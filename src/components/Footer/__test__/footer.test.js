import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from './../Footer';


afterEach(cleanup);
it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer.create(<Footer/> ).toJSON();
  expect(tree).toMatchSnapshot();
});
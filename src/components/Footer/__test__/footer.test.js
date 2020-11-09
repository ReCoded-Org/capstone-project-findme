import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './../Footer';


it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer.create(<Footer/> ).toJSON();
  expect(tree).toMatchSnapshot();
});
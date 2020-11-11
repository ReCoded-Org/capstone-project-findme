import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissingPersonForm from './../MissingPersonForm';


afterEach(cleanup);
it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissingPersonForm />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer.create(<MissingPersonForm/> ).toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import ReactDOM from 'react-dom';
import { getByTestId, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissingPeople from './MissingPeople';

afterEach(cleanup);

it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissingPeople />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer
    .create(<MissingPeople missingPeople="Missing People" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

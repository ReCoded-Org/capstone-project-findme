import React from 'react';
import ReactDOM from 'react-dom';
import { getByTestId, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissingPeoplePage from './MissingPeoplePage';

afterEach(cleanup);

it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissingPeoplePage />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer.create(<MissingPeoplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

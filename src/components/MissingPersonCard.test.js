import React from 'react';
import ReactDOM from 'react-dom';
import { getByTestId, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissingPersonCard from './MissingPersonCard';

afterEach(cleanup);
it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissingPersonCard />, div);
});

it('renders snapshot 1', () => {
  const tree = renderer
    .create(
      <MissingPersonCard
        userName="John Doe"
        lostSince="7-7-2017"
      ></MissingPersonCard>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

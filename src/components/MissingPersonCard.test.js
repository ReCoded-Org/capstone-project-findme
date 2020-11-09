import React from 'react';
import ReactDOM from 'react-dom';
import { getByTestId, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissingPersonCard from './MissingPersonCard';

afterEach(cleanup);
it('render without crashes ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissingPersonCard cardInfo ={{ lostFamily:true , userName:"asd" }}/>, div);
});

it('renders snapshot 1', () => {
  const tree = renderer
    .create(
      <MissingPersonCard
      cardInfo ={{ lostFamily:true , userName:"asd" }}
      ></MissingPersonCard>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

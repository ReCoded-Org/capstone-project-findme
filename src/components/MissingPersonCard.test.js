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
const cardInfo = {
  id: 2,
  userName: 'Jane Doe',
  lostSince: '7-7-2017',
  img: require('../images/profile-svg.svg'),
  lostFamily: true,
  description:
    'she was lost from another place and she has no friends or relatives',
  age: 20,
  location: "Sana'a",
  views: 33,
};

it('renders snapshot', () => {
  const tree = renderer
    .create(<MissingPersonCard cardInfo={cardInfo} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

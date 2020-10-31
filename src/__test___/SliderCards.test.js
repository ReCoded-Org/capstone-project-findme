import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
//import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react'
import Slider from '../../../containers/Home/SliderCards';
import Card from '../Card'

import renderer from 'react-test-renderer';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( < Slider / > , div);
});

it('matches snapshot', () => {
    const tree = renderer.create( < Slider / > ).toJSON();
    expect(tree).toMatchSnapshot();
});
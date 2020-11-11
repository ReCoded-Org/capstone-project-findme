import React, { useState } from 'react';
import api from './Api';
import Card from '../../components/Quotes/Card';
//Carousel is a Package used to create slider with its component,
import Carousel from 'react-elastic-carousel';

export default function Cards() {
  //storing api data in a state
  const [data, setData] = useState(api);

  //console.log(data)
  //the parint component is the slider from Carousel package
  //start by mapping through all data objectis
  //pass a prop (object) for each Card component inside the slider
  return (
    <div className="bg-findMe max-h-full sm:pr-4 sm:pl-4 my-4">
      <Carousel>
        {data.map((e, index) => (
          <Card key={e.id} cardInfo={e} i={index} />
        ))}
      </Carousel>
    </div>
  );
}

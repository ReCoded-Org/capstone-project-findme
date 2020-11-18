import React, { useState, useEffect } from 'react';
//import api from './Api';
import Card from '../../components/Quotes/Card';
//Carousel is a Package used to create slider with its component,
import Carousel from 'react-elastic-carousel';
//import useFirestore from '../../hooks/useFirestore'
import { projectFirestore } from '../../firebase';

export default function Cards() {
  //storing api data in a state
  const [data, setData] = useState([]);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection('SuccessfullyFound')
        .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
}, ['SuccessfullyFound']);


  //console.log(data)
  //the parint component is the slider from Carousel package
  //start by mapping through all data objectis
  //pass a prop (object) for each Card component inside the slider
  //  mx-8 sm:mx-4
  return (
    <div className="bg-findMe max-h-full sm:pr-4 sm:pl-4 my-4 mx-4 md:mx-8">
      <Carousel>
        {docs && docs.map((e, index) => (
          <Card key={e.id} cardInfo={e} i={index} />
        ))}
      </Carousel>
    </div>
  );
}

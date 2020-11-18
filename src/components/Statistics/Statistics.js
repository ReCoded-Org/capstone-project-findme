/**
 *
 * component: Statitics
 * page: main page - Home Page -
 *
 */

import React from 'react';
// import './Statistics.scss';

/**
 *
 * @component: FigureLIst
 * @page: Home Page
 * lists all the figures that comes from props param and render them.
 * @param {object} props
 * @returns list of JSX figures (statistics)
 */
const FigureList = (props) => {
  return props.info.map((figure) => {
    return (
      <div className="flex flex-col items-center flex-1" key={figure.id}>
        <figure>
          <img src={figure.icon} alt="" className="h-24 w-auton" />
        </figure>
        <div>
          <p className="flex flex-col text-center font-bold">
            <span className="text-5xl">{figure.figure}</span>
            <span className="text-xl">{figure.text}</span>
          </p>
        </div>
      </div>
    );
  });
};
export const Statitics = (props) => {
  return (
    <section className="my-32">
      <div className="lg:mx-16 md:mx-8 sm:mx-6 p-8 flex flex-col sm:flex-col md:flex-row space-y-24 md:space-y-0 xl:justify-center">
        <FigureList info={props.info} />
      </div>
    </section>
  );
};

export default Statitics;

import React from 'react';

import Card from '../../Body/Card';

import "./Favourites.css";

function Favourites({favourite}) {
  return (
    // Returning favourite cards
    <>
      <div className='favo-cards'>
        {favourite?.map(({ name, location, beds, bathrooms, price, area, img }) => (
          <div className="favo-card">
            <Card
              name={name}
              location={location}
              beds={beds}
              bathrooms={bathrooms}
              price={price}
              area={area}
              img={img}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Listings from './Listings';
import Details from './Details';

function Dashboard({ pizzaPlaces }) {
  return (
    <div className='dashwrapper'>
      <Routes>
        <Route path='/' element={<Listings pizzaPlaces={pizzaPlaces} />} />
        {pizzaPlaces.map((pizzaPlace, index) => (
          <Route
            key={index}
            path={`/details/${index}`}
            element={<Details pizzaPlace={pizzaPlace} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default Dashboard;

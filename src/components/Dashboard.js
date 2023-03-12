import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ConnectedLoggedInListings,
  ConnectedLoggedOutListings,
} from './Listings';
import { LoginContext } from '../App';

function Dashboard({ pizzaPlaces }) {
  const { loggedIn } = useContext(LoginContext);

  const handleDelete = (index) => {
    // Delete the pizza place with the given index
  };

  return (
    <div className='dashwrapper'>
      <Routes>
        {loggedIn ? (
          <Route
            path='/'
            element={
              <ConnectedLoggedInListings
                pizzaPlaces={pizzaPlaces}
                handleDelete={handleDelete}
              />
            }
          />
        ) : (
          <Route
            path='/'
            element={<ConnectedLoggedOutListings pizzaPlaces={pizzaPlaces} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default Dashboard;

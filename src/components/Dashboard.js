import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoggedInListings, LoggedOutListings } from './Listings';
import Details from './Details';
import Login from './Login';
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
              <LoggedInListings
                pizzaPlaces={pizzaPlaces}
                handleDelete={handleDelete}
              />
            }
          />
        ) : (
          <Route
            path='/'
            element={<LoggedOutListings pizzaPlaces={pizzaPlaces} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default Dashboard;

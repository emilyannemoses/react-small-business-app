import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ConnectedLoggedInListings,
  ConnectedLoggedOutListings,
} from './Listings';
import { LoginContext } from '../App';
import Details from './Details';

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings,
  };
};

function Dashboard({ listings, handleDelete }) {
  const { loggedIn } = useContext(LoginContext);

  return (
    <div className='dashwrapper'>
      <Routes>
        <Route
          path='/'
          element={
            loggedIn ? (
              <ConnectedLoggedInListings
                listings={listings}
                handleDelete={handleDelete}
              />
            ) : (
              <ConnectedLoggedOutListings listings={listings} />
            )
          }
        />
        <Route path='/details/:index' element={<Details />} />
      </Routes>
    </div>
  );
}

export default connect(mapStateToProps)(Dashboard);

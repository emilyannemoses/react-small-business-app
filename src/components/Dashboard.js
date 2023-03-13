import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ConnectedLoggedInListings,
  ConnectedLoggedOutListings,
} from './Listings';
import { LoginContext } from '../App';
import Details from './Details';
import AddListing from './AddListing';
import addlisting from './img/addlisting.png';

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
            <>
              {loggedIn ? (
                <>
                  <ConnectedLoggedInListings
                    listings={listings}
                    handleDelete={handleDelete}
                  />
                  <Link to='/add'>
                    <img
                      src={addlisting}
                      alt='addListing'
                      style={{ width: 260, height: 65, marginTop: 25 }}
                    />
                  </Link>
                </>
              ) : (
                <ConnectedLoggedOutListings listings={listings} />
              )}
            </>
          }
        />
        <Route path='/details/:index' element={<Details />} />
        <Route path='/add' element={<AddListing />} />
      </Routes>
    </div>
  );
}

export default connect(mapStateToProps)(Dashboard);

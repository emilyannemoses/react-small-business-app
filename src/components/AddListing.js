import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addListing } from '../redux/actions';

const mapDispatchToProps = {
  addListing: addListing,
};

function AddListing({ addListing }) {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = { businessName, 
                         description, 
                         address, 
                         hours, 
                         lat: parseFloat(lat),
                         lng: parseFloat(lng) };
    addListing(newListing);
    setBusinessName('');
    setDescription('');
    setAddress('');
    setHours('');
    setLat();
    setLng();
  };

  return (
    <div>
      <h1>Add Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Business Name:
          <input
            type='text'
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            type='text'
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Latitude:
          <input
            type='text'
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Longitude:
          <input
            type='text'
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
          />
        </label>
        <br />
        <button type='submit'>Add Listing</button>
      </form>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(AddListing);

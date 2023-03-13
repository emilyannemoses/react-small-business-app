import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Details({ listings }) {
  const { index } = useParams();
  const pizzaPlace = listings[index];
  const mapRef = useRef(null);

  useEffect(() => {
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: pizzaPlace.lat, lng: pizzaPlace.lng },
      zoom: 12,
    });

    new google.maps.Marker({
      position: { lat: pizzaPlace.lat, lng: pizzaPlace.lng },
      map: map,
      title: pizzaPlace.businessName,
    });
  }, [pizzaPlace]);

  return (
    <div>
      <h1>{pizzaPlace.businessName}</h1>
      <p>{pizzaPlace.address}</p>
      <p>{pizzaPlace.hours}</p>
      <p>{pizzaPlace.description}</p>
      <div style={{ height: '400px', width: '100%' }} ref={mapRef} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings,
  };
};

const ConnectedDetails = connect(mapStateToProps)(Details);

export default ConnectedDetails;

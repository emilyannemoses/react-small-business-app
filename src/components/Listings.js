import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import address from './img/address.png';
import desc from './img/desc.png';
import hours from './img/hours.png';
import name from './img/name.png';
import deleteimg from './img/delete.png';
import { LoginContext } from '../App';
import { deleteListing } from '../redux/actions';
import { initialState } from '../redux/listings';
import DeleteIcon from '@mui/icons-material/Delete';

const mapStateToProps = (state) => {
  return {
    listings: initialState.listings,
  };
};

const mapDispatchToProps = {
  deleteListing: deleteListing,
};

function LoggedInListings({ listings, deleteListing }) {
  const { loggedIn } = useContext(LoginContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <img
                src={name}
                alt='Business Name'
                style={{ width: 140, height: 35 }}
              />
            </TableCell>
            <TableCell align='center'>
              <img
                src={desc}
                alt='Description'
                style={{ width: 140, height: 35 }}
              />
            </TableCell>
            <TableCell align='center'>
              <img
                src={address}
                alt='Address'
                style={{ width: 140, height: 35 }}
              />
            </TableCell>
            <TableCell align='center'>
              <img src={hours} alt='Hours' style={{ width: 140, height: 35 }} />
            </TableCell>
            {loggedIn && (
              <TableCell align='center'>
                <img
                  src={deleteimg}
                  alt='Delete'
                  style={{ width: 140, height: 35 }}
                />
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  to={`/details/${index}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {listing.businessName}
                </Link>
              </TableCell>
              <TableCell align='right'>{listing.description}</TableCell>
              <TableCell align='right'>{listing.address}</TableCell>
              <TableCell align='right'>{listing.hours}</TableCell>
              {loggedIn && (
                <TableCell align='center'>
                  <DeleteIcon
                    aria-label='delete'
                    onClick={() => deleteListing(index)}
                  >
                    <DeleteIcon />
                  </DeleteIcon>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function LoggedOutListings({ listings }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <img
                src={name}
                alt='Business Name'
                style={{ width: 140, height: 35 }}
              />
            </TableCell>
            <TableCell align='center'>
              <img
                src={desc}
                alt='Description'
                style={{ width: 140, height: 35 }}
              />
            </TableCell>
            <TableCell align='center'>
              <img
                src={address}
                alt='Address'
                style={{ width: 140, height: 35 }}
              />
            </TableCell>
            <TableCell align='center'>
              <img src={hours} alt='Hours' style={{ width: 140, height: 35 }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  to={`/details/${index}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {listing.businessName}
                </Link>
              </TableCell>
              <TableCell align='right'>{listing.description}</TableCell>
              <TableCell align='right'>{listing.address}</TableCell>
              <TableCell align='right'>{listing.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ConnectedLoggedInListings = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInListings);
const ConnectedLoggedOutListings = connect(mapStateToProps)(LoggedOutListings);

export { ConnectedLoggedInListings, ConnectedLoggedOutListings };

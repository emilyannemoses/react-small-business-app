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
import DeleteIcon from '@mui/icons-material/Delete';

const mapStateToProps = (state) => ({
  pizzaPlaces: state.listings.listings,
});

const mapDispatchToProps = {
  deleteListing: deleteListing,
};

export function LoggedInListings({ pizzaPlaces, deleteListing }) {
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
          {pizzaPlaces.map((pizzaPlace, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  to={`/details/${index}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {pizzaPlace.businessName}
                </Link>
              </TableCell>
              <TableCell align='right'>{pizzaPlace.description}</TableCell>
              <TableCell align='right'>{pizzaPlace.address}</TableCell>
              <TableCell align='right'>{pizzaPlace.hours}</TableCell>
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

const LoggedInListingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInListings);

export function LoggedOutListings({ pizzaPlaces }) {
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
          {pizzaPlaces.map((pizzaPlace, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  to={`/details/${index}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {pizzaPlace.businessName}
                </Link>
              </TableCell>
              <TableCell align='right'>{pizzaPlace.description}</TableCell>
              <TableCell align='right'>{pizzaPlace.address}</TableCell>
              <TableCell align='right'>{pizzaPlace.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const LoggedOutListingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedOutListings);

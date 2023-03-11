import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from '@mui/material';
import address from './img/address.png';
import desc from './img/desc.png';
import hours from './img/hours.png';
import name from './img/name.png';

const Listings = ({ pizzaPlaces }) => {
  return (
    <Container>
      <TableContainer component={Paper} sx={{ backgroundColor: '#f0eded' }}>
        <Table>
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
                <img
                  src={hours}
                  alt='Hours'
                  style={{ width: 140, height: 35 }}
                />
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
                <TableCell>{pizzaPlace.description}</TableCell>
                <TableCell>{pizzaPlace.address}</TableCell>
                <TableCell>{pizzaPlace.hours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Listings;

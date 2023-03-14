import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import pizzafinder from './img/pizzafinder.png';
import login from './img/login.png';
import { LoginContext } from '../App';

function ResponsiveAppBar() {
  const { loggedIn } = useContext(LoginContext);
  function refreshPage(){ 
    window.location.reload(); 
  }

  return (
    <AppBar position='static' style={{ background: '#283544' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={pizzafinder}
              alt='pizzaFinderLogo'
              style={{ width: 200, height: 50 }}
            />
          </Link>
          <>
            {loggedIn ? (
              <div style={{ marginLeft: 'auto', cursor: 'pointer' }}>
                <div onClick={refreshPage}>Log Out</div>
              </div>
            ) : (
              <div style={{ marginLeft: 'auto' }}>
                <Link to='/login'>
                  <img src={login} 
                        alt='login' 
                        style={{ width: 160, height: 40 }} />
                </Link>
            </div>
            )}
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

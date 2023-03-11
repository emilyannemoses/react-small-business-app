import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import pizzafinder from './img/pizzafinder.png';

function ResponsiveAppBar() {
  return (
    <AppBar position='static' style={{ background: '#283544' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <img src={pizzafinder} style={{ width: 200, height: 50 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import './App.css';
import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function App(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  const pizzaPlaces = [
    {
      businessName: 'Pinthouse Pizza',
      description: 'Craft brewpub. Award winning beer and amazing pizza!',
      address: '4236 S Lamar Blvd, Austin, TX 78704',
      hours: 'Mon-Sun: 11am-11pm',
      lat: 30.236777722926266,
      lng: -97.79586044232892,
    },
    {
      businessName: 'Home Slice Pizza',
      description: 'Neighborhood pizza joint serving authentic NY-Style pizza.',
      address: '1415 S Congress Ave, Austin, TX 78704',
      hours: 'Mon-Sun: 11am-11pm',
      lat: 30.249367601957672,
      lng: -97.74945870085574,
    },
    {
      businessName: 'Via 313',
      description:
        'Authentic Detroit-Style pizza, right in the heart of Austin!',
      address: '1802 E 6th St, Austin, TX 78702',
      hours: 'Mon-Sun: 11am-10pm',
      lat: 30.26230268324553,
      lng: -97.72311661619761,
    },
  ];

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? (
          <div className='App'>
            <ResponsiveAppBar />
            <header className='App-header'>
              <Login />
            </header>
          </div>
        ) : (
          <div className='App'>
            <ResponsiveAppBar />
            <header className='App-header'>
              <div className='content'>
                <div className='dashboard'>
                  <Dashboard pizzaPlaces={pizzaPlaces} />
                </div>
              </div>
            </header>
          </div>
        )}
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

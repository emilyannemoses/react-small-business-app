import './App.css';
import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { useSelector } from 'react-redux';

export const LoginContext = createContext({
  loggedIn: true,
  setLoggedIn: () => {},
});

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const listings = useSelector((state) => state.listings.listings);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {!loggedIn ? (
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
                  <Dashboard listings={listings} />
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

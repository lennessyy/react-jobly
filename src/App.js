import React, { useState } from 'react';
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import JoblyApi from './Api'
import Navbar from './Navbar'
import TokenContext from './TokenContext'

function App() {
  //Get token from local storage
  // const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))
  const [token, setToken] = useState()
  // verify token if there is one
  // if (token) {
  //   JoblyApi.getCompanies(token).then(
  //     console.log('Token verified')
  //   ).catch(
  //     setToken(null)
  //   )
  // }
  debugger
  return (
    <div className="App">
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;

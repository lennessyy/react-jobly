import React, { useState, useEffect } from 'react';
import Routes from './Routes'
import JoblyApi from './Api'
import Navbar from './Navbar'
import TokenContext from './TokenContext'
import Loading from './pages/Loading'

function App() {
  //Get token from local storage
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  // verify token if there is one
  useEffect(() => {
    if (token) {
      JoblyApi.getUser(token).then((res) => {
        console.log('Token verified')
        setUser(res.user)
        setIsLoading(false)
      }
      ).catch((error) => {
        console.log(error)
        setIsLoading(false)
      }
      )
    } else {
      setIsLoading(false)
    }
  }, [token])

  if (isLoading) {
    return (<Loading />)
  } else {
    return (
      <div className="App">
        <TokenContext.Provider value={{ token, setToken, user, setUser }}>
          <Navbar />
          <Routes />
        </TokenContext.Provider>
      </div>
    );
  }
}

export default App;

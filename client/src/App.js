import React, { useState } from "react";

import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import SignIn from "./pages/Login"
import Search from "./pages/Wishlist"
import UserPage from "./pages/User";
import Register from "./pages/Register";

function App() {
  const [token, setToken] = useState(null)

  const authenticatedFetch = (url, options) => {
    return fetch(url, { ...options, headers: { Authorization: `Bearer ${token}`} }).then(res => res.json())
  }

  return (
    <>
      <Router>
        <Navbar loggedIn={!!token}/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/user" exact>
            <UserPage fetcher={authenticatedFetch}/>
          </Route>
          <Route path="/myList" exact>
            <Search onSuccess={(token) => setToken(token)}/> 
          </Route>
          <Route path="/login" exact>
            <SignIn onSuccess={(token) => setToken(token)}/>
          </Route>
          <Route path="/register" exact>
            <Register onSuccess={(token) => setToken(token)}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;

import React, { useState } from "react";

import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Register from "./pages/Register"
import Login from "./pages/Login"
import WishListPage from "./pages/Wishlist"
import UserPage from "./pages/User";

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
          <Route path="/Favorites" exact>
            <Favorites token={token} />
          </Route>
          <Route path="/MyList" exact>
            <WishListPage fetcher={authenticatedFetch}/>
          </Route>
          <Route path="/register" exact>
            <Register onSuccess={(token) => setToken(token)}/> 
          </Route>
          <Route path="/login" exact>
            <Login onSuccess={(token) => setToken(token)}/>
          </Route>
          <Route path="/User" exact>
            <UserPage fetcher={authenticatedFetch}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;

import React, { useState } from "react";

import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/home"
import Favorites from "./pages/favorites"
import Register from "./pages/Register"
import Login from "./pages/Login"
import WishListPage from "./pages/Wishlist"
import SearchPage from "./pages/Search"
import DashboardPage from "./pages/Dashboard"

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
          <Route path="/Search" exact>
            <SearchPage fetcher={authenticatedFetch}/>
          </Route>
          <Route path="/register" exact>
            <Register onSuccess={(token) => setToken(token)}/> 
          </Route>
          <Route path="/login" exact>
            <Login onSuccess={(token) => setToken(token)}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;

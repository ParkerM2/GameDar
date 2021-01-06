import React from "react";

import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/home"
import Favorites from "./pages/favorites"
import WishListPage from "./pages/Wishlist"

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Favorites" exact component={Favorites}/>
        <Route path="/MyList" exact component={WishListPage}/>
      </Switch>
    </Router>
    
    </>
    
  )
  }

export default App;

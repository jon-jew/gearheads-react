import React from 'react';
import Home from './pages/Home.js';
import Marketplace from './pages/Marketplace.js';
import Explore from './pages/Explore.js';
import Garage from './pages/Garage.js';
import CarPage from './pages/CarPage.js';
import Login from './pages/Login.js';
import ScrollToTop from 'react-router-scroll-top'

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


function App() {
  return (
    <Router>
        <Route path="/home" exact component={Home} />
        <Route path="/marketplace/" exact component={Marketplace} />
        <Route path="/explore/" exact component={Explore} />
        <Route path="/garage/" exact component={Garage} />
        <Route path="/carpage/" exact component={CarPage} />
        <Route path="/login/" exact component={Login} />
        <ScrollToTop/>
    </Router>

  );
}



export default App;

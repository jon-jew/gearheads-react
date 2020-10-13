import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Searchbar from './Searchbar.js';

class NavbarHome extends React.Component{

  render(){
    return(
      <div class = "navbar navbar-home">
        <div class="title"><span id = "gear">GEAR</span><span id = "heads">HEADS</span></div>
        <Link to="/login/"  id="navbar-login" className="navbar-item" activeStyle={{color: "#c6b495"}}>LOGIN</Link><br/>
        <Searchbar/>
      </div>
    )
  }
}

export default NavbarHome;

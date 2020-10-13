import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Navbar extends React.Component{

  render(){
    return(
      <div class = "navbar">
        <div class="title"><span id = "gear">GEAR</span><span id = "heads">HEADS</span></div>
        <Link to="/login/"  id="navbar-login" className="navbar-item" activeStyle={{color: "#FFF"}}>LOGIN</Link><br/>
      </div>
    )
  }
}

export default Navbar;

import React from 'react';
import logo from './logo.svg';
import pic from './mr2.jpg';
import pic2 from './download.jpg';
import './App.css';
import { push as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function marketplace() {
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
        <Navbar />

        </main>
      </div>
    </div>
  );
}

function Home() {
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
        <Navbar />
        <CarCardContainer />
        </main>
      </div>
    </div>

  );
}

function getLocation(){
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  var location = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  return location;
}

getLocation();


function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/marketplace/" exact component={marketplace} />
    </Router>
  );
}

class CarCardContainer extends React.Component{
  render(){
    return(
      <div class = "card-container">
        <CarCard car={"2003 NISSAN 350Z"} pic={pic2}/>
        <CarCard car={"1991 TOYOTA MR2"} pic={pic}/>
        <CarCard car={"2003 NISSAN 350Z"} pic={pic2}/>
        <CarCard car={"1991 TOYOTA MR2"} pic={pic}/><CarCard car={"2003 NISSAN 350Z"} pic={pic2}/>
        <CarCard car={"1991 TOYOTA MR2"} pic={pic}/>
      </div>
    )
  }
}

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu id = "sidebar" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } styles={ styles }>
          <Link to="/" id="home" className="menu-item" href="/">HOME</Link>
          <Link to="/marketplace/" id="about" className="menu-item" href="/about">MARKETPLACE</Link>
          <a id="contact" className="menu-item" href="/contact">EXPLORE</a>
      </Menu>
    );
  }
}

class CarCard extends React.Component{

  render(){
    return(
      <div class = "card">
        <div class = "card-photo"><img class="car-photo" src={this.props.pic}/></div>
        <div class = "car-title">{this.props.car}</div>
      </div>
    )
  }
}

class Navbar extends React.Component{

  render(){
    return(
      <div class = "navbar">
        <h2 id = "title">Gearheads</h2>
      </div>
    )

  }
}

export default App;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#ada795',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

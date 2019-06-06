import React from 'react';
import logo from './logo.svg';
import pic from './mr2.jpg';
import pic2 from './download.jpg';
import searchIcon from './search-solid.svg'
import SearchForm from './MarketSearch.js'
import GarageTabs from './garage.js'

import './App.css';
import { push as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



function marketplace() {
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <MarketplaceSidebar />
        <main id="page-wrap">
        <Navbar />
        <div class = "marketplace-box">
          <div class = "marketplace-title">
            MARKETPLACE
          </div>
        </div>
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
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
        <div class = "welcome">
          Welcome to Gearheads!
        </div>
        <CarCardContainer />
        </main>
      </div>
    </div>

  );
}

function Explore(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
        <Navbar />
        <div class = "card-container">

          <ManufacturerCard manu={"ACURA"} />
          <ManufacturerCard manu={"ACURA"} />
          <ManufacturerCard manu={"ACURA"} />
        </div>
        </main>
      </div>
    </div>
  );
}

function Garage(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
        <Navbar />
        <GarageTabs />
        </main>
      </div>
    </div>
  );
}

function CarPage(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
        <Navbar />

        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
        <Route path="/home" exact component={Home} />
        <Route path="/marketplace/" exact component={marketplace} />
        <Route path="/explore/" exact component={Explore} />
        <Route path="/garage/" exact component={Garage} />
        <Route path="/carpage/" exact component={CarPage} />
    </Router>

  );
}

class CarCardContainer extends React.Component{
  render(){
    return(
      <div class = "card-container">
        <CarCard year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCard year={"1991"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCard year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCard year={"1995"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCard year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCard year={"1994"} car={"TOYOTA MR2"} pic={pic}/>
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
          <NavLink to="/home" id="home" className="menu-item" activeStyle={{color: "#c6b495"}} ><i class="list-icon fas fa-home"></i> HOME</NavLink>
          <NavLink to="/marketplace/" id="marketplace" className="menu-item" activeStyle={{color: "#c6b495"}}><i class="list-icon fas fa-coins"></i> MARKETPLACE</NavLink>
          <NavLink to="/explore/" id="explore" className="menu-item" activeStyle={{color: "#c6b495"}}><i class="list-icon fas fa-binoculars"></i> EXPLORE</NavLink>
          <NavLink to="/garage/" id="my-garage" className="menu-item" activeStyle={{color: "#c6b495"}}><i class="list-icon fas fa-warehouse"></i> MY GARAGE</NavLink>
      </Menu>
    );
  }
}

class MarketplaceSidebar extends React.Component{
  showSettings (event){
    event.preventDefault();
  }

  render(){
    return(
      <Menu right id = "marketplace-search" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } customBurgerIcon={ <img src={searchIcon} /> } styles={ styles2 }>
        <SearchForm />
      </Menu>
    )
  }
}

class CarCard extends React.Component{

  render(){
    return(
      <Link to="/carpage" className="card">

        <div class = "card-photo"><img class="car-photo" src={this.props.pic}/></div>
        <div class = "car-title"><span class = "car-year">{this.props.year}</span><br />{this.props.car}
          <div class = "car-user"><i class="fas fa-user"></i> USERNAME</div>
        </div>

      </Link>
    )
  }
}



class MarketCard extends React.Component{

  render(){
    return(
      <div class = "card">
        <div class = "car-price">$8000</div>
        <div class = "card-photo"><img class="car-photo" src={this.props.pic}/></div>
        <div class = "car-title"><span class = "car-year">{this.props.year}</span><br />{this.props.car}</div>
        <div class = "market-info car-user ">110000 MILES <i class="market-icon fas fa-tachometer-alt"></i><br />LOCATION <i class="market-icon fas fa-map-marker-alt"></i></div>
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

class ManufacturerCard extends React.Component{
  render(){
    return(
      <div class = "manufacturer-card">
        {this.props.manu}
      </div>
    )
  }
}



export default App;

var styles2 = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#16ad7b'
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
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
    background: '#212121'
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

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#c6b495'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#c6b495'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
    background: '#212121'
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

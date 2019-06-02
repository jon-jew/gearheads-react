import React from 'react';
import logo from './logo.svg';
import pic from './mr2.jpg';
import pic2 from './download.jpg';
import searchIcon from './search-solid.svg'
import './App.css';
import { push as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function marketplace() {
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <MarketplaceSidebar />
        <main id="page-wrap">
        <Navbar />
        <div class = "marketplace-box">

          <div class = "marketplace-title">MARKETPLACE</div>

        </div>
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
          <Link to="/" id="home" className="menu-item">HOME</Link>
          <Link to="/marketplace/" id="marketplace" className="menu-item">MARKETPLACE</Link>
          <Link to="/explore/" id="explore" className="menu-item">EXPLORE</Link>
          <Link to="/garage/" id="my-garage" className="menu-item">MY GARAGE</Link>
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

      </Menu>
    )
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

var styles2 = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
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

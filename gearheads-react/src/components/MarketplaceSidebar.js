import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SearchForm from './MarketSearch.js';
import searchIcon from '../search-solid.svg';

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

export default MarketplaceSidebar;


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

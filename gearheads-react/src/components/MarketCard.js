import React from 'react';

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

export default MarketCard;

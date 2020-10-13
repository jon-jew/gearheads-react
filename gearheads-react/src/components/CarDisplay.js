import React from 'react';

class CarDisplay extends React.Component{
  render(){
    return(
      <div class = "car-display">
        <div class = "car-title"><span class = "car-year">{this.props.year}</span><br />{this.props.car}
          <div class = "car-user"><i class="fas fa-user"></i> USERNAME</div>
        </div>
      </div>
    )
  }
}

export default CarDisplay;

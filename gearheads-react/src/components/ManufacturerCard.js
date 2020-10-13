import React from 'react';

class ManufacturerCard extends React.Component{
  render(){
    return(
      <div class = "manufacturer-card">
        {this.props.manu}
      </div>
    )
  }
}

export default ManufacturerCard;

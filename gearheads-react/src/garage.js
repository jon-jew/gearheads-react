import React from 'react';
import './Garage.css'

class GarageTabs extends React.Component {
  render(){
    return(

        <div>
          <input type="radio" id="trigger1" name="slider"/>
          <label for="trigger1"></label>
          <div class="slide bg1">Poop</div>

          <input type="radio" id="trigger2" name="slider"/>
          <label for="trigger2"></label>
          <div class="slide bg2"></div>

          <input type="radio" id="trigger3" name="slider"/>
          <label for="trigger3"></label>
          <div class="slide bg3"></div>

          <input type="radio" id="trigger4" name="slider"/>
          <label for="trigger4"></label>
          <div class="slide bg4"></div>

          <input type="radio" id="trigger5" name="slider"/>
          <label for="trigger5"></label>
          <div class="slide bg5"></div>

          <input type="radio" id="trigger6" name="slider"/>
          <label for="trigger6"></label>
          <div class="slide bg5"></div>
        </div>

    );
  }
}

export default GarageTabs;

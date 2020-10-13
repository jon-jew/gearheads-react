import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const background = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nissan350Z-01.jpg/1280px-Nissan350Z-01.jpg)"
};

class CarCardGrad extends React.Component{
  
  render(){
    return(
      <Link to="/carpage" className="card">
        <div class = "card-overlay">
        <div class = "card-like"><i class="fas fa-heart"></i> 22</div>
        <div class = "car-overlay-title"><span class = "car-year">{this.props.year}</span><br />{this.props.car}
          <div class = "car-user"><i class="fas fa-user"></i> USERNAME</div>
        </div>
        </div>
          <div class = "card-photo" style = {background}></div>



      </Link>
    )
  }
}

export default CarCardGrad;

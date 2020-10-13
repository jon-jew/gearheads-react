import React from 'react';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import CarHeader from '../components/carPage/CarHeader.js';
import LikeButton from '../components/LikeButton.js'

import '../css/App.css';

function CarPage(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <Navbar />
        {/* <div class = "header-button-container">
          <a id = "specs"class = "right header-button">
            <i class="fas fa-info-circle"></i>
          </a>
          <a id = "comments" class = "right header-button">
            <i class="far fa-comment-dots"></i>
          </a>
          <a id = "pictures" class = "right header-button">
            <i class="far fa-images"></i>
          </a>
        </div> */}
        <main id="page-wrap">
        <div class = "car-header-container">
          <CarHeader />
        </div>
        </main>
      </div>
    </div>
  );
}


export default CarPage;

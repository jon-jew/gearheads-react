import React from 'react';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import ManufacturerCard from '../components/ManufacturerCard.js';

import '../css/App.css';

function Explore(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <Navbar />
        <main id="page-wrap">

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

export default Explore;

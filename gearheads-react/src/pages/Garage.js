import React from 'react';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';

import '../css/App.css';

function Garage(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <Navbar />
        <main id="page-wrap">


        </main>
      </div>
    </div>
  );
}

export default Garage;

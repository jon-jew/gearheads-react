import React from 'react';
import NavbarHome from '../components/NavbarHome.js';
import Sidebar from '../components/Sidebar.js';
import CarCardContainer from '../components/CarCardContainer.js';

import '../css/App.css';

function Home() {
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <NavbarHome />
        <main id="page-wrap">

          <div class = "welcome">
            Welcome to Gearheads!
            Use this to explore other people's cars.
          </div>

          <CarCardContainer />
        </main>
      </div>
    </div>

  );
}

export default Home;

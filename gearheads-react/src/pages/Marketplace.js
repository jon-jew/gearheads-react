import React from 'react';
import Sidebar from '../components/Sidebar.js';
import Navbar from '../components/Navbar.js';
import MarketCard from '../components/MarketCard.js';
import MarketplaceSidebar from '../components/MarketplaceSidebar.js';

import pic from '../mr2.jpg';
import pic2 from '../download.jpg';

import '../css/App.css';

function Marketplace() {
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <MarketplaceSidebar />
        <Navbar />
        <main id="page-wrap">

        <div class = "marketplace-box">
          <div class = "marketplace-title">
            MARKETPLACE
          </div>
        </div>
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        <MarketCard year={"1991"} car={"TOYOTA MR2"} pic={pic} />
        </main>
      </div>
    </div>
  );
}

export default Marketplace

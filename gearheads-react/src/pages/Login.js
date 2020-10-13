import React from 'react';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import LoginForm from '../components/LoginForm.js';
import '../css/App.css';

function Login(){
  return(
    <div className = "App">
      <div id="outer-container">
        <Sidebar />
        <Navbar />
        <main id="page-wrap">

          <LoginForm />

        </main>
      </div>
    </div>
  );
}

export default Login;

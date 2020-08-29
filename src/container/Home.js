import React from "react";
import './home.css';

const Home = () => {
  return (
    <div className="home FullHeight d-flex" style={{backgroundImage:'url(./images/blackcat.jpg)'}}>
      <div className="header">
        <h1> Hello cats!</h1>
      </div>
      <div className="text">
        <p>This page is for cat lovers</p>
      </div>
    
    </div>
  );
};

export default Home;

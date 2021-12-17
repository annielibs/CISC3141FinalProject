import React from "react";
import jurnlLogo from "../assets/jurnl-logo.png";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <img className="app-logo" src={jurnlLogo} alt="logo"></img>
    </div>
  );
};

export default HomePage;

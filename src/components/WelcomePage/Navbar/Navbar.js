import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="home">
      <nav className="navbar navbar-expand-lg right navbar-light bg-light">
        <a className="navbar-brand font-weight-bold" href="#"><span><i className="fas fa-code"></i></span> 21stStack</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active font-weight-bold" href="#home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link font-weight-bold" href="#about">About Us</a>
            <a className="nav-item nav-link font-weight-bold" href="#service">Services</a>
            <a className="nav-item nav-link font-weight-bold" href="#contact">Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
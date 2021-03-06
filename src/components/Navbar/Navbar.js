import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <section id="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">Master_trader's</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#top">HOME </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">TESTIMONIALS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
   
    </>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar-wrapper p-5">
        <div className="container-xxl">
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <div className="logo">
                <h1>Invictus</h1>
              </div>
            </div>
            <div className="col-6">
              <div className="nav-links d-flex align-items-center gap-5">
                <a href="#booking">Booking</a>
                <a href="#facilities">Facilities</a>
                <a href="#about-us">About Us</a>
                <a href="#location">Location</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="col-3">
              <div className="login">
                <button className="btn-dark rounded-pill px-5 py-3">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

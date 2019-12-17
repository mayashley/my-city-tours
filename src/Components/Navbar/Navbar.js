import React from "react";
// import logo from '../Images/logo.png';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navBar">
        <h4 className="logo">
          <span>City</span>Tours
        </h4>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link ">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

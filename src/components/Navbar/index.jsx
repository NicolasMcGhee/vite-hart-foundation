import React, { act, useState } from "react";
import HartLogo from "/Logos/Hart_Foundation_logo.jpg";
import "./index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(1);
  const [display, setDisplay] = useState(false);

  function toggleTab(index) {
    setActive(index);
  }

  function toggleDisplay() {
    setDisplay((display) => !display);
    console.log(display);
  }

  return (
    <header className="primary-header flex">
      <div className="img-container flex">
        <img src={HartLogo} alt="WWE Logo" width={100} className="logo" />
      </div>
      <button
        onClick={toggleDisplay}
        className={`mobile-nav-toggle ${
          display ? "mobile-close-icon" : "mobile-open-icon"
        }`}
        aria-controls="primary-navigation"
      >
        <span className="sr-only" aria-expanded={display ? "true" : "false"}>
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators flex ${
            display ? "visible" : "not-visible"
          }`}
        >
          <li
            className={`${active === 1 ? "active" : ""}`}
          >
            <Link onClick={() => {
              toggleTab(1) 
              toggleDisplay()}} to="/" className="uppercase text-white letter-spacing-2"><span>00</span>Home</Link>
          </li>
          <li
            className={`${active === 2 ? "active" : ""}`}
          >
            <Link onClick={() => {
              toggleTab(2) 
              toggleDisplay()}} to="/members" className="uppercase text-white letter-spacing-2"><span>01</span>Members</Link>
          </li>
          <li
            className={`${active === 3 ? "active" : ""}`}
          >
            <Link onClick={() => {
              toggleTab(3) 
              toggleDisplay()}} to="/history" className="uppercase text-white letter-spacing-2"><span>02</span>History</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

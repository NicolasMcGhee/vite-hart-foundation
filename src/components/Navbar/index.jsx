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
      {/* Find hamburge icon for open and close */}
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
        {/* Move active class and logic to link directly to fix active tab bug */}
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators flex ${
            display ? "visible" : "not-visible"
          }`}
        >
          <li
            onClick={() => toggleTab(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <Link to="/" className="uppercase text-white letter-spacing-2"><span>00</span>Home</Link>
          </li>
          <li
            onClick={() => toggleTab(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <Link to="/members" className="uppercase text-white letter-spacing-2"><span>01</span>Members</Link>
          </li>
          <li
            onClick={() => toggleTab(3)}
            className={`${active === 3 ? "active" : ""}`}
          >
            <Link to="/history" className="uppercase text-white letter-spacing-2"><span>02</span>History</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

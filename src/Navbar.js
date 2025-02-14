import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import LogoIcon from "./assets/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img
          src={LogoIcon}
          alt="Progress Icon"
          className="progress-svg-icon"
          style={{ marginTop: "1px" }}
        />
      </div>

      {/* Hamburger Menu Icon */}
      {/* <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FiX size={24} color="#fff" />
        ) : (
          <FiMenu size={24} color="#fff" />
        )}
      </div> */}

      {/* Menu Section */}
      {/* <div className={`menu ${menuOpen ? "open" : ""}`}>
        <a href="#" className="menu-item" onClick={() => setMenuOpen(false)}>
          Events
        </a>
        <a href="#" className="menu-item" onClick={() => setMenuOpen(false)}>
          My Tickets
        </a>
        <a href="#" className="menu-item" onClick={() => setMenuOpen(false)}>
          About Project
        </a>
      </div> */}

      {/* Button Section */}
      <div className="button-section">
        <button className="tickets-button">
          MY TICKETS <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

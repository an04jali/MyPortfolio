import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <h1>Aarti Singh</h1>

      {/* Desktop Menu */}
      <ul className="menu">
        <Link to="home" spy={true} smooth={true} duration={800}><li>Home</li></Link>
        <Link to="about" spy={true} smooth={true} duration={800}><li>About</li></Link>
        <Link to="projects" spy={true} smooth={true} duration={800}><li>Projects</li></Link>
        {/* <Link to="chatbot" spy={true} smooth={true} duration={800}><li>Chat Bot</li></Link> */}
        <Link to="contact" spy={true} smooth={true} duration={800}><li>Contact</li></Link>
      </ul>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobilemenu ${isOpen ? "show" : ""}`}>
        <Link to="home" smooth={true} duration={800} onClick={toggleMenu}><li>Home</li></Link>
        <Link to="about" smooth={true} duration={800} onClick={toggleMenu}><li>About</li></Link>
        <Link to="projects" smooth={true} duration={800} onClick={toggleMenu}><li>Projects</li></Link>
        {/* <Link to="chatbot" smooth={true} duration={800} onClick={toggleMenu}><li>Chat Bot</li></Link> */}
        <Link to="contact" smooth={true} duration={800} onClick={toggleMenu}><li>Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;

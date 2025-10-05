import { useState } from "react";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; */
{/*<FontAwesomeIcon icon={faBars} />*/}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <nav className="navbar">
        <button className={`hamburger ${isOpen ? "open" : ""}`} aria-label="Menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

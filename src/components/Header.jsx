import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

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
        <MenuOverlay isOpen={isOpen} toggleMenu={() => toggleMenu()} />
      </nav>
    </header>
  );
}

export default Header;

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen(prev => {
      const nextState = !prev;
      
      if (nextState) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      return nextState;
    });
};
  return (
    <header>
      <nav className="navbar">
        <button className={`hamburger ${isOpen ? "is-active" : ""}`} aria-label="Menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <MenuOverlay isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}

export default Header;

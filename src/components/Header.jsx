import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { soundManager } from "../utils/soundManager";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.isMuted);

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

  const handleToggleMute = () => {
    const nextMute = soundManager.toggleMute();
    setIsMuted(nextMute);
    if (!nextMute) {
      soundManager.playBlip(); // Play a blip when unmuting to confirm
    }
  };

  return (
    <header>
      <nav className="navbar">
        <button 
          className="pixel-btn" 
          style={{ fontSize: '0.5rem', padding: '0.5rem' }} 
          onClick={handleToggleMute}
        >
          {isMuted ? "[ SOUND OFF ]" : "[ SOUND ON ]"}
        </button>
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

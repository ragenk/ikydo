import { createPortal } from "react-dom";

function MenuOverlay( { isOpen, toggleMenu } ) {
    if (!isOpen) return null;
    console.log(isOpen)
    return createPortal(
        <div className="mobile-menu-overlay">
            <button className={`hamburger close-btn ${isOpen ? "is-active" : ""}`} aria-label="Menu" onClick={toggleMenu}>
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
        </div>
    , document.getElementById('modal-root') 
    );
}
export default MenuOverlay;
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a 
            className="icon-email"
            href="mailto:aguasvivas3@gmail.com"            
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            >
              <i className="nes-icon gmail is-medium"></i>
          </a>
        </li>
        <li>
          <a 
            className="icon-github"
            href="https://github.com/ragenk"            
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >              
              <i className="nes-icon github is-medium"></i>
          </a>
        </li>
        <li>
          <a 
            className="icon-linkedin"
            href="https://www.linkedin.com/in/raguasvivas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >              
              <i className="nes-icon linkedin is-medium"></i>
          </a>
        </li>
        <li>
          <a 
            className="icon-whatsapp"
            href="https://wa.me/18094324277"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            >
              <i className="nes-icon whatsapp is-medium"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

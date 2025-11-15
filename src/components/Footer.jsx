import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a 
            href="mailto:aguasvivas3@gmail.com"            
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/ragenk"            
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/raguasvivas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a 
            href="https://wa.me/18094324277"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

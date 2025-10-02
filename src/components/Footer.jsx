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
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

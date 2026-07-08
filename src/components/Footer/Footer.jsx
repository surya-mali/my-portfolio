import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h3 className="footer-name">Suryakant Mali</h3>

        <p className="footer-text">
          Java Full Stack Developer | React | Spring Boot | MySQL
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/surya-mali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/suryakant-mali-9b029a354/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:suryakantmali2008@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Suryakant Mali. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
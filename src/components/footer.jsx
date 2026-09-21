import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Middle Tier: Social Pills */}
        <div className="footer-social-tier">
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/alex-ryse/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/rysealex"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a
              href="Resume_Alex_Ryse.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill resume"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              <span>Resume PDF</span>
            </a>
          </div>

          <div className="footer-updated">
            <span className="update-dot" />
            <span>Last Updated: September 2026</span>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Colophon */}
        <div className="footer-bottom-tier">
          <p className="footer-colophon">
            Designed & Engineered by Alex Ryse with React.
          </p>
          <p className="footer-copyright">
            © {currYear} Alex Ryse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

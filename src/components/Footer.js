import React from 'react';
import { FiGithub, FiLinkedin, FiDribbble } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">Portfolio</a>
            <p>Creating responsive and user-friendly web experiences</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/basiratabidi" target="_blank" rel="noopener noreferrer">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/basirat-zehra" target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={20} />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <FiDribbble size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
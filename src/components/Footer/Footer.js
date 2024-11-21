import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about" data-aos="fade-up"
     data-aos-duration="3000">
          <h2>About GreenWood</h2>
          <p>
            We are committed to providing reliable investment solutions with transparency and security. Our mission is to empower individuals with tools to grow their financial future confidently.
          </p>
        </div>

        <div className="footer-section links" data-aos="fade-up"
     data-aos-duration="3000">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/plans">Plans</a></li>
            <li><a href="/Hierarchy">Hierarchy</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact" data-aos="fade-up"
     data-aos-duration="1000">
          <h2>Contact Us</h2>
          <p>Email: support@investmentplatform.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Investment St, New York, NY 10001</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Investment Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

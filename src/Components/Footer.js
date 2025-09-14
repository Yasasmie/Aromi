import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-contact">
        <p>Contact Us:</p>
        <p>Email: info@aromifashion.com</p>
        <p>Phone: +94 71 234 5678</p>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Aromi Fashion Academy. All rights reserved.
      </p>
    </footer>
  );
}

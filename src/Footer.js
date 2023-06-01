import React from 'react';
import './css/FooterStyle.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
  <div className="containerF">
    <div className="footer-columns">
      <div className="footer-column">
        <h4>About Us</h4>
        <p>We are a team of passionate fashion enthusiasts who want to bring the latest trends to your wardrobe.</p>
      </div>
      <div className="footer-column">
        <h4>Categories</h4>
        <ul>
          <li><Link>Women</Link></li>
          <li><Link>Men</Link></li>
          <li><Link>Kids</Link></li>
          <li><Link>Accessories</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Temara</li>
          <li>Massira 2, CP 10000</li>
          <li>info@MATALAN.com</li>
          <li>+212 675094939</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 MATALAN. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}

export default Footer;
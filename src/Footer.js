import React from 'react';
import './css/FooterStyle.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer class="site-footer">
  <div class="container">
    <div class="footer-columns">
      <div class="footer-column">
        <h4>About Us</h4>
        <p>We are a team of passionate fashion enthusiasts who want to bring the latest trends to your wardrobe.</p>
      </div>
      <div class="footer-column">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>123 Main Street</li>
          <li>New York, NY 10001</li>
          <li>info@store.com</li>
          <li>(123) 456-7890</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 MATALAN. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}

export default Footer;
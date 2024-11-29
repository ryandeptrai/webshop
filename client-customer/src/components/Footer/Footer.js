import React from 'react';
import './Footer.css'; // Đảm bảo tạo file CSS tương ứng

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <p>ABOUT US</p>
        </div>
        <div className="footer-section">
          <h4>INFORMATION</h4>
          <p>CLIENT SERVICE</p>
        </div>
        <div className="footer-section">
          <h4>CONNECT</h4>
          <p>INSTAGRAM</p>
          <a href="https://www.instagram.com/shopping.clothing/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/shopping.clothing/</a>
          <p>FACEBOOK</p>
          <a href="https://www.facebook.com/shopingclothing" target="_blank" rel="noopener noreferrer">https://www.facebook.com/shopingclothing</a>
        </div>
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p>+84 977 699 624</p>
          <p>MON-SUN 8:30AM - 9:30PM</p>
          <p>EMAIL US</p>
          <p>shopingclothingstreetwear@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 SHOPPINGCLOTHING</p>
      </div>
    </footer>
  );
};

export default Footer;

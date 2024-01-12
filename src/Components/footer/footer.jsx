import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">GoogleBookApp.com</p>
        <p className="mm">
          You must be the change you wish to see in the world.
        </p>
        <p>
          &copy;2024 | Keerthana
          <br />
          All Rights Reserved
        </p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>info@googlebookapp.com</p>
        <p>Coimbatore</p>
      </div>
      <div className="footer-section">
        <p className="title">Features</p>
        <a href="https://books.google.com/intl/en/googlebooks/about/index.html">
          <p>About Google Books</p>
        </a>
        <a href="https://books.google.com/intl/en/googlebooks/privacy.html">
          {" "}
          <p>Privacy Policy</p>
        </a>
        <a href="https://books.google.com/intl/en/googlebooks/tos.html">
          <p>Terms of Service</p>
        </a>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <a href="https://www.facebook.com/Google/">
          <p className="flink">
            <FaFacebook />
          </p>
        </a>
        <a href="https://www.instagram.com/Google/">
          <p className="flink">
            <FaInstagram />
          </p>
        </a>
        <a href="https://twitter.com/Google">
          <p className="flink">
            <FaTwitter />
          </p>
        </a>
        <a href="https://www.linkedin.com/Google">
          <p className="flink">
            <FaLinkedin />
          </p>
        </a>
      </div>
    </div>
  );
};
export default Footer;

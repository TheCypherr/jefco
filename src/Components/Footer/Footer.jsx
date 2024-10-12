import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const handlePageRefresh = () => {
    window.location.reload();
  };

  return (
    <section className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-t1">
          <h1>JEFCO INSIGHTS</h1>
          <hr />
          <p>STAY UP TO DATE WITH THE LATEST TRENDS AND NEWS FROM JEFCO MFG.</p>
        </div>
        <div className="footer-t1">
          <h1>STAY IN TOUCH</h1>
          <hr />
          <p>
            WE WOULD LOVE TO HEAR FROM YOU! PLEASE LEAVE US A REVIEW OR CONNECT
            WITH US ON SOCIAL MEDIA.
          </p>
          <div className="icons">
            <FaInstagram href="https://instagram.com/" size={23} />
            <FaLinkedin href="https://linkedin.com/" size={23} />
          </div>
        </div>
        <div className="footer-logo">
          <Link onClick={handlePageRefresh}>
            <img src="/footer-logo.png" alt="footer" />
          </Link>
        </div>
        <div className="footer-t1">
          <h1>LOCATION</h1>
          <hr className="new" />
          <p>718 NW 1ST Street, Fort Lauderdale, FL 33311</p>
        </div>
        <div className="footer-t1">
          <h1>CONTACT US</h1>
          <hr className="new" />
          <p>904-792-4181</p>
          <p>jmc@jetcomfg.com</p>
        </div>
      </div>
      <div className="footer-middle">
        <ul>
          <li>Home</li>
          <li>Privacy Policy</li>
          <li>Terms of service</li>
          <li>Site Map</li>
          <li>Refund Policy</li>
          <li>Shipping Policy</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-b1">
          <p>© 2024 JMC Jefco Manufacturing, Inc.</p>
          <p>Powered by Shopify - Website created by IQS Directory</p>
        </div>
        <div className="directory-logo">
          <img src="/discover.png" alt="directory" />
        </div>
        <div className="footer-blast">
          <div className="card-container">
            <img src="/americanex.jpg" alt="card" />
          </div>
          <div className="card-container">
            <img src="/mastercard.jpg" alt="card" />
          </div>
          <div className="card-container">
            <img src="/visa.png" alt="card" />
          </div>
          <div className="card-container">
            <img src="/discovercc.webp" alt="card" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

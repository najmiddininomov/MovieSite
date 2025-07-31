import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-top">
          <div className="column">
            <h3>Home</h3>
            <p>Categories</p>
            <p>Devices</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>
          <div className="column">
            <h3>Movies</h3>
            <p>Gernes</p>
            <p>Trending</p>
            <p>New Release</p>
            <p>Popular</p>
          </div>
          <div className="column">
            <h3>Shows</h3>
            <p>Gernes</p>
            <p>Trending</p>
            <p>New Release</p>
            <p>Popular</p>
          </div>
          <div className="column">
            <h3>Support</h3>
            <p>Contact Us</p>
          </div>
          <div className="column">
            <h3>Subscription</h3>
            <p>Plans</p>
            <p>Features</p>
          </div>
          <div className="column social">
            <h3>Connect With Creator</h3>
            <div className="icons">
              <a
                href="https://instagram.com/najmiddin_life"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://x.com/NajmiddinInomov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter /> X
              </a>
              <a
                href="https://facebook.com/najmiddin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF /> Facebook
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            ©2023 streamvib, All Rights Reserved and Created by Najmiddin Inomov
          </p>
          <div className="links">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

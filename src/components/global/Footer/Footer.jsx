import "./_Footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";

import React from "react";

const Footer = () => {
  const socialIconStyles = {
    height: "24px",
    width: "24px",
  };

  return (
    <section className="footer">
      <article className="footer__footer-card footer-card footer-card--main">
        <h2 className="footer-card__heading">Main</h2>
        <p className="footer-card__content">302b 2 St irricana AB T0M 1B0</p>
        <p className="footer-card__content">403-935-4354</p>
        <a
          href="mailto:manager@convenientcannabis.ca"
          className="footer-card__email"
        >
          manager@convenientcannabis.ca
        </a>
      </article>
      <article className="footer__footer-card footer-card footer-card--quick-links">
        <h2 className="footer-card__heading">Quick Links</h2>
        <Link to="/" className="footer-card__link">
          Home
        </Link>
        <Link to="/about" className="footer-card__link">
          About Us
        </Link>
        <Link to="/shop" className="footer-card__link">
          Shop
        </Link>
      </article>
      <article className="footer__footer-card footer-card footer-card--hours">
        <h2 className="footer-card__heading">Hours</h2>
        <div className="footer-card__stores-wrapper">
          <div className="footer-card__store-hours-wrapper">
            <h3 className="footer-card__subheading">Irricana</h3>
            <p className="footer-card__subheading-small">Sun - Sat</p>
            <p className="footer-card__content">13:00 - 21:00</p>
          </div>
          <div className="footer-card__hours-wrapper">
            <h3 className="footer-card__subheading">Oyen</h3>
            <p className="footer-card__subheading-small">Sun - Sat</p>
            <p className="footer-card__content">11:00 - 19:00</p>
          </div>
        </div>
      </article>
      <div className="footer__social-copyright-card-wrapper">
        <article className="footer__footer-card footer-card footer-card--social">
          <h2 className="footer-card__heading">Social</h2>
          <div className="footer-card__social-links-wrapper">
            <a href="https://www.facebook.com" className="footer-card__social-link">
              <FacebookRounded
                className="footer-card__social-link-icon"
                sx={{ ...socialIconStyles }}
              />
            </a>
            <a href="https://www.instagram.com" className="footer-card__social-link">
              <Instagram
                className="footer-card__social-link-icon"
                sx={{ ...socialIconStyles }}
              />
            </a>
            <a href="https://www.twitter.com" className="footer-card__social-link">
              <Twitter
                className="footer-card__social-link-icon"
                sx={{ ...socialIconStyles }}
              />
            </a>
          </div>
        </article>
        <article className="footer__footer-card footer-card footer-card--copyright">
          <p className="footer-card__content">
            &copy; 2023 Convenient Cannabis Inc. All rights reserved.
          </p>
          <p className="footer-card__content">
            {/* <a className="footer-card__copyright-link" href="#">Terms of Service</a> | 
        <a className="footer-card__copyright-link" href="#">Privacy Policy</a> */}
            Terms of Service | Privacy Policy
          </p>          
        </article>
      </div>
    </section>
  );
};

export default Footer;

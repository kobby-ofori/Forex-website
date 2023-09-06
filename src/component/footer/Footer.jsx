import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={facebook} alt="" />
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className="logo-f">
        <img src="" alt="" />
      </div>

      <div className="blur blur-footer1"></div>
      <div className="blur blur-footer2"></div>
    </div>
  );
};

export default Footer;

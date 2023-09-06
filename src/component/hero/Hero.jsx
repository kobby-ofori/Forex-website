import React from "react";
import "./Hero.css";
import Header from "../Header";
import forex from "../../images/forex.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>best in forex</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Make </span>
            <span>Money</span>
          </div>
          <div>
            <span>Online</span>
          </div>
          <div>
            <span>
              The best online platform to trade forex, crypto and stocks.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>etc</span>
            <span>etc</span>
          </div>
          <div>
            <span>etc</span>
            <span>etc</span>
          </div>
          <div>
            <span>etc</span>
            <span>etc</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get started</buttons>
          <buttons className="btn">Learn more</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <Link to="join-us" span={true} smooth={true}>
            Join Now
          </Link>
        </button>

        <div className="heart-rate">
          <img src={forex} alt="" />
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

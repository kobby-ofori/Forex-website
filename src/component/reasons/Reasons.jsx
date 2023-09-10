import React from "react";
import "./Reasons.css";
import forexreason1 from "../../images/forexreason1.jpg";
import forexreason2 from "../../images/forexreason2.jpg";
import forexreason3 from "../../images/forexreason3.jpg";
import forexreason4 from "../../images/forexreason4.jpg";
import success from "../../images/success.png";
import bitcoin from "../../images/bitcoin.png";
import exness from "../../images/exness.png";
import dailyfxlogo from "../../images/dailyfxlogo.jpg";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={forexreason1} alt="" />
        <img src={forexreason2} alt="" />
        <img src={forexreason3} alt="" />
        <img src={forexreason4} alt="" />
      </div>
      <div className="right-r">
        <span>Reasons</span>

        <div>
          <span className="stroke-text">Why </span>
          <span>choose us</span>
        </div>

        <div className="details-r">
          <div></div>
          <div>
            <img src={success} alt=""></img>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
          <div>
            <img src={success} alt="" />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
          <div>
            <img src={success} alt="" />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
          <div>
            <img src={success} alt="" />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <span style={{ color: "gray", fontWeight: "normal" }}>
          Sponsors & Partners
        </span>

        <div className="partners">
          <img src={bitcoin} alt="" />
          <img src={exness} alt="" />
          <img src={dailyfxlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;

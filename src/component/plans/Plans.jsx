import React from "react";
import "./Plans.css";
import next from "../../images/next.png";
import success from "../../images/success.png";
import bronze from "../../images/bronze.png";
import silver from "../../images/silver.png";
import gold from "../../images/gold.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>

      <div className="programs-header">
        <span className="stroke-text">Considering</span>
        <span>to start your</span>
        <span className="stroke-text">trading journey</span>
        <span>with us ?</span>
      </div>

      {/* plans card */}
      <div className="plans">

        {/* left-side card */}
        <div className="plan">
          <img src={bronze} alt="bronze-medal" width="32px" />
          <h5>BRONZE (0% DEDUCTION)</h5>
          <h2>FREE</h2>
          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>70% Accurate trading signals</span>
          </div>

          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>1:2000 Levarage</span>
          </div>

          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>Quick deposit and withdrawal</span>
          </div>

          <div className="more-text">
            
            <span>more</span><img src={next} alt="more ->" width="24px" />{" "}
            
          </div>
          <button className="btn">Join</button>
        </div>

        {/* middle card */}
        <div className="plan middle-card">
          <img src={gold} alt="gold-medal" width="32px" />
          <h5>GOLD</h5>
          <h2>$20/ ANNUALLY</h2>
          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>95% Accurate trading signals</span>
          </div>

          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>1:Unlimited Levarage</span>
          </div>

          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>Quick deposit and withdrawal</span>
          </div>

          <div className="more-text">
            
            <span>more</span><img src={next} alt="more ->" width="24px" />{" "}
            
          </div>
          <button className="btn">Join</button>
        </div>

        {/* right-side card */}
        <div className="plan">
          <img src={silver} alt="silver-medal" width="32px" />
          <h5>SILVER</h5>
          <h2>$15/ ANNUALLY</h2>
          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>80% Accurate trading signals</span>
          </div>

          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>1:5000 Levarage</span>
          </div>

          <div className="tick-text">
            <img src={success} alt="success-tick-img" width="24px" />
            <span>Quick deposit and withdrawal</span>
          </div>

          <div className="more-text">
            
            <span>more</span><img src={next} alt="more ->" width="24px" />{" "}
            
          </div>
          <button className="btn">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

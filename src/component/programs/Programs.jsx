import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* headers */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* program cards */}
      <div className="program-categories">
        <div className="category category-1">
          <h2 className= "category-head">Make Money Online</h2>
          <p>
            Make money online with our fast and reliable platform. Interactive
            charts that show historical and real-time price movements, with
            technical indicators and drawing tools for analysis
          </p>
        </div>

        <div className="category category-2">
          <h2 className= "category-head">Demo Accounts & Educational Resources</h2>
          <p>
            Simulated trading accounts with virtual funds, allowing users to
            practice trading without risking real money.Articles, tutorials,
            webinars, and courses to educate traders about Forex trading
            strategies, risk management, and market analysis.
          </p>
        </div>

        <div className="category category-3">
          <h2 className= "category-head">Live Forex Rates & Currency Converter</h2>
          <p>
            A tool that allows users to quickly convert one currency into
            another, using real-time exchange rates.Displays real-time exchange
            rates for major currency pairs and commodities.
          </p>
        </div>

        <div className="category category-4">
          <h2 className= "category-head">Extra</h2>
          <p>
            Tools for depositing, withdrawing, and managing funds in trading
            accounts. Trade on the go with your mobile phone. Technical Analysis
            Tools: Indicators, oscillators, and other technical analysis tools
            to assist traders in making informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;

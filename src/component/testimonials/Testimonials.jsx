import React, { useState } from "react";
import "./Testimonials.css";
import { usersReviewsData } from "../../data/usersReviewsData";
import leftarrow from "../../images/leftarrow.png"
import rightarrow from "../../images/rightarrow.png"

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = usersReviewsData.length;
  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>said</span>
        <span>{usersReviewsData[selected].review}</span>
        <span>
          <span>{usersReviewsData[selected].name}</span>-{" "}
          {usersReviewsData[selected].status}
        </span>{" "}
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={usersReviewsData[selected].image} alt="" />

        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftarrow}
            alt="<"
          />
          <img 
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            src={rightarrow}
            alt=">"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

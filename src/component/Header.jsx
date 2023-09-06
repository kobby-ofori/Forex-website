import React, { useState } from "react";
import "./Header.css";
import menubox from "../images/menubox.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id="header">
      <img src="" alt="" /> {/*image for logo*/}
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "white",
            padding: "0.5rem",
            borderRadius: "10px",
            opacity: "50%",
            cursor: "pointer",
          }}
        >
          <img
            src={menubox}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="header"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Reasons
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const [clName, setClass] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setClass(false);
      } else {
        setClass(true);
      }
      return () => window.removeEventListener("scroll");
    });
  }, []);
  return (
    <div className={clName ? "nav__bar" : "nav_bar_false"}>
      <Link className="nav__link" to="/">
        <img
          className="nav__logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt="logo"
        />
      </Link>

      <Link className="nav__link" to="/login">
        <button className="nav__login">Sign In</button>
      </Link>
      <Link className="nav__link" to="/register">
        <button className="nav__register">Register</button>
      </Link>
    </div>
  );
}

export default NavBar;
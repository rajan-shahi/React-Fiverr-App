import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {

    const [active,setActive] = useState(false);
  return (
    <div  className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">Fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>join</button>
        </div>
      </div>
      {active &&(
        <>
        <hr />
      <div className="menu">
        <span>Test1</span>
        <span>Test2</span>
      </div>
      </>
      )}
    </div>
  );
};

export default Navbar;

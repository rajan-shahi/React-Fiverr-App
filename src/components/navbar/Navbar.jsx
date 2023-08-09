import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation()
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "rajan Shahi",
    isSeller: true,
  };
  return (
    <div className={active || pathname !=="/"  ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>join</button>}
          {currentUser && (
            <div className="user" onClickCapture={() => setOpen(!open)}>
              <img src="./images/bdr.jpg" alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        <span>Gigs</span>
                      </Link>
                    
                      <Link  className="link" to="/add">
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    <span>Orders</span>
                  </Link>
                  <Link  className="link" to="/messages">
                    <span>Messages</span>
                  </Link>

                  <Link  className="link" to="/">
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && (
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

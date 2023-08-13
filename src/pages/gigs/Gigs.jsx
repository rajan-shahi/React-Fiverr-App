import React, { useState } from "react";
import "./gigs.scss";
import GigCard from './../../components/catCard/gigCard/GigCard';
import {gigs} from "../../data";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="Gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">sortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "newest"}
            </span>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("creatdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <GigCard key={gig.id} item ={gig}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;

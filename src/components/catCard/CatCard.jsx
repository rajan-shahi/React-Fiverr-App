import React from "react";
import "./catCard.scss";
import { Link } from "react-router-dom";

const CatCard = ({cards }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <div className="container">
          <img src={cards.img} alt="" />
          <span className="desc">{cards.desc}</span>
          <span className="title">{cards.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;

import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertrips</h1>
            <div className="title">
              <img src="" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rate,just project-based pricing</p>
          </div>
          <div className="item">
            <video src="">controls</video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

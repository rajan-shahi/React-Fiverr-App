import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertrips</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rate,just project-based pricing</p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rate,just project-based pricing</p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rate,just project-based pricing</p>
          </div>
          <div className="item">
          <video src="./images/video.mp4" controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

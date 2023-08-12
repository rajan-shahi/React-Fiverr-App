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
            <p>
              Find high-quality services at every price point. No hourly
              rate,just project-based pricing
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly
              rate,just project-based pricing
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly
              rate,just project-based pricing
            </p>
          </div>
          <div className="item">
            <video src="./images/video.mp4" controls />
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for items</h1>
            <p>
              upgrate to a curated experience packed with tools and
              benifits,dedicated to business
            </p>
            <div className="titile">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="titile">
              <img src="./images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="titile">
              <img src="./images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide />
    </div>
  );
};

export default Home;

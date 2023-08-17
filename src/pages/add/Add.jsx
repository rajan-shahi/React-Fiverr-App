import React from "react";
import "./add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="section">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="Design">Design</option>
              <option value="Web">web Development</option>
              <option value="Animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Add;

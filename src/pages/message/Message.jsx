import React from "react";
import "./message.scss";
import { Link } from "react-router-dom";


const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGE</Link>
          Rajan Shahi
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et,
              doloremque est dignissimos quasi nobis accusantium debitis
              similique dolore sequi rerum sit eveniet itaque autem praesentium
              vitae perferendis reiciendis ex?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;

import React from "react";
import "./messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const message =
    "Lorem ipsum, dolor sit amet consectetur adipisicing is. Libero , rerum sapiente.Lorem ipsum, dolor sit amet consectetur Libero , rerum sapiente.Lorem ipsum,consectetur Libero , rerum sapiente.Lorem ipsum, dolor sit amet ";
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Rajan Shahi</td>
            <td>
              {" "}
              <Link to="/message/id" className="link">
                {message.substring(0, 100)}....
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr className="active">
            <td>loki chaulagain</td>
            <td>
              <Link to="/message/id" className="link">
                {message.substring(0, 100)}....
              </Link>
            </td>
            <td>3 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr>
            <td>Gita Bista</td>
            <td>
              <Link to="/message/id" className="link">
                {message.substring(0, 100)}....
              </Link>
            </td>
            <td> 5 day ago</td>
          </tr>

          <tr>
            <td>Saroj kumar Rokaya</td>
            <td>
              <Link to="/message/id" className="link">
                {message.substring(0, 100)}....
              </Link>
            </td>
            <td>1 week ago</td>
          </tr>

          <tr>
            <td>Jun Parsad Rokaya</td>
            <td>
              <Link to="/message/id" className="link">
                {message.substring(0, 100)}....
              </Link>
            </td>
            <td>3 week ago</td>
          </tr>

          <tr>
            <td>Riya Thapa</td>
            <td>
              <Link to="/message/id" className="link">
                {message.substring(0, 100)}....
              </Link>
            </td>
            <td>13 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;

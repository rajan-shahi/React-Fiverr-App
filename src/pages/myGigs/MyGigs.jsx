import React from "react";
import "./myGigs.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className="myGig">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>

        <table>
          <tr>
            <th>images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/images/delete.png" alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/images/delete.png" alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/images/delete.png" alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/images/delete.png" alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/images/delete.png" alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/images/delete.png" alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;

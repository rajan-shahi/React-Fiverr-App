import React from 'react'
import "./message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
   <div className="message">
    <div className="container">
      <span className="breadcrumbs">
        <Link to="/messages">MESSAGE</Link>
        Rajan Shahi 
      </span>
      <div className="messages"></div>
      <div className="write">
        <textarea name="" placeholder='write a message' cols="30" rows="10"></textarea>
      </div>
    </div>
   </div>
  )
}

export default Message

import React from 'react'
import "./projectCard.scss"
import { Link } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <Link to="/">
    <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
            <img src={item.pp}alt="" />
            <div className="text">
                <h2>{item.ct}</h2>
                <span>{item.username}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard

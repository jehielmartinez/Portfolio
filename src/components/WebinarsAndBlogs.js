import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrophone } from "@fortawesome/free-solid-svg-icons"
import Webinar from "./Webinar"

export default function WebinarsAndBlogs({ webinars = [], posts = [] }) {
  return (
    <section className="mycard webinars-card">
      <div className="mycard__header">
        <h2>
          <FontAwesomeIcon icon={faMicrophone} /> Webinars & Blogs
        </h2>
      </div>
      <div className="webinars-card__webinars">
        {webinars.map(link => (
          <Webinar key={link} video={link} />
        ))}
      </div>
    </section>
  )
}

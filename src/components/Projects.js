import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'

export default function Projects ({ projects = [], openModal }) {
  return (
    <section className='mycard projects-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faMicrochip} /> Projects
        </h2>
      </div>
      <div className='projects-card__slideshow'>
        {projects.map((project, key) => (
          <article
            onClick={() => openModal(project)}
            key={key}
            className='mycard projects-card__project'
          >
            <img
              src={require(`../assets/images/${project.image}`)}
              alt='project'
            />
            <h3>{project.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

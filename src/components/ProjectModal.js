import React from "react"

export default function ProjectModal({ project, closeModal }) {
  return (
    <section onClick={closeModal} className="project-modal">
      <article className="mycard project-modal__content">
        <div className="project-modal__content--image">
          <img
            src={require(`../assets/images/${project.image}`)}
            alt="project"
          />
        </div>
        <div className="project-modal__content--description">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          {project.link && (
            <a rel="noopener noreferrer" target="_blank" href={project.link}>
              Try it LIVE!
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              rel="noopener noreferrer"
              target="_blank"
              className="project-modal__content--link"
            >
              <img
                className="project-modal__content--ios"
                src="https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg"
                alt="app link"
              />
            </a>
          )}
          {project.playStore && (
            <a
              href={project.playStore}
              rel="noopener noreferrer"
              target="_blank"
              className="project-modal__content--link"
            >
              <img
                className="project-modal__content--android"
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="android link"
              />
            </a>
          )}
        </div>
      </article>
    </section>
  )
}

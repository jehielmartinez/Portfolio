import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Skills ({ skills = [] }) {
  return (
    <section className='mycard skills-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faCode} /> Skills
        </h2>
      </div>
      <div className='skills-card__skills'>
        {skills.map((skill, key) => (
          <div className='skills-card__skills--element' key={key}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

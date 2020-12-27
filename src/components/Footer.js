import React from 'react'

export default function Footer () {
  const year = new Date()
  return (
    <footer className='mycard__header footer'>
      <p>{`Jehiel Martinez  ${year.getFullYear()}`}</p>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href='https://github.com/jehielmartinez/portfolio-website'
      >
        Source Code
      </a>
    </footer>
  )
}

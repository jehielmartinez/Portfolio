import React, { useState } from "react"
import resumeData from "../assets/resume"
import Profile from "../components/Profile"
import Twitter from "../components/Twitter"
import Skills from "../components/Skills"
import DownloadButton from "../components/DownloadButton"
import About from "../components/About"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import ProjectModal from "../components/ProjectModal"
import Education from "../components/Education"
import "../styles/global.css"

export default function Home() {
  const [resume] = useState(resumeData)
  const [show, setShow] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const openModal = project => {
    setShow(true)
    setSelectedProject(project)
  }

  const closeModal = () => {
    setShow(false)
  }

  const { profile, skills, about, projects, experience, education } = resume

  return (
    <>
      <main className="main_container">
        {show && <ProjectModal closeModal={closeModal} project={selectedProject} />}
        <section className="profile_section">
          <Profile profile={profile} />
          <Skills skills={skills} />
          <Twitter />
          <DownloadButton />
        </section>

        <section className="career_section">
          <About about={about} />
          <Projects projects={projects} openModal={openModal} />
          <Education education={education} />
          <Experience experience={experience} />
        </section>
      </main>
      <Footer />
    </>
  )
}

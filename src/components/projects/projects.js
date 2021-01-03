import React from 'react'
import styles from './projects.module.css'

import MoreBtn from '../moreBtn/moreBtn'
import SectionTitle from '../sectionTitle/sectionTitle'

import Project from '../project/project'

const Projects = () => {
  return (


    <section className={styles.projects} id="projects">
      <SectionTitle text="My projects" />

      <Project  />

      <div className={styles.spaceBottom}>
        <MoreBtn text="View More Projects" href="/projects/" />
      </div>
    </section>

  )
}

export default Projects

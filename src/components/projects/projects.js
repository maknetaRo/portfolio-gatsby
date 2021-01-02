import React from 'react'
import styles from './projects.module.css'
import projectImage from '../../../static/img/travel-app.png'
import MoreBtn from '../moreBtn/moreBtn'

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
        <h2 className={styles.sectionTitle}>My projects</h2>
        <article className={styles.project}>
          <div className={styles.imgCard}>
            <figure className={styles.cardProject}>
              <img
                src={projectImage}
                alt="screenshot of travel website with form"
              />
            </figure>
          </div>

          <div className={styles.projectDesc}>
            <div className={styles.title}>
              <h2 className={styles.projectTitle}><a href="">Travel App</a></h2>
            </div>
            <div className={styles.textProject}>
              <p>
                Travel application to plan your next holiday. Choose
                destination, check the weather forecast and places to visit,
                hotels, restaurants.
              </p>
            </div>
            <div className={styles.technology}>
              <p># Web Design</p>
              <p># Django</p>
              <p># JavaScript</p>
              <p># 3rd part API</p>
            </div>
             <div className={styles.cardBottom}>
              <a href="#">View Live</a>
              <a href="#">View Code</a>
            </div> 
          </div>
        </article>

        <div className={styles.spaceBottom}>
          <MoreBtn />
        </div>
      </section>
    )
}

export default Projects

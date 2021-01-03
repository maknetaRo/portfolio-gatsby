import React from 'react'
import styles from './project.module.css'
import ElementTitle from '../elementTitle/elementTitle'


const Project = () => {
  return (
    <article className={styles.project}>
      <div className={styles.imgCard}>
        <figure className={styles.cardProject}>
          <img
            src=""
            alt="screenshot of travel website with form"
          />
        </figure>
      </div>

      <div className={styles.projectDesc}>
        <ElementTitle />
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
  )
}

export default Project

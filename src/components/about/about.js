import React from 'react'
import styles from './about.module.css'
import author from '../../../static/img/magda.png'

const About = props => {
    return (
        
        <section className={styles.about}>
        <div className={styles.aboutInfo}>
          <h1>Hi! I'm Magda.</h1>
          <p>
            A Web Developer who loves Python, Django and CSS drawings. Here I'm
            documenting my learning process. I'm learning by doing & building in
            public.
          </p>
        </div>
        <div className={styles.mePhoto}>
          <figure className={styles.me}>
            <img className={styles.meImg} src={author} alt="woman's face" />
          </figure>
        </div>
      </section>
       
    )
}

export default About

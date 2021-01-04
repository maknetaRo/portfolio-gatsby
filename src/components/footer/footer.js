import React from 'react'
import styles from './footer.module.css'
import MoreBtn from '../moreBtn/moreBtn'
import FootNote from '../footNote/footNote'
import {
  FaCodepen,
  FaGithub,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contact} id="contact">
        <div className={styles.inTouch}>
          <h2>Let's start something new</h2>
          <h3>Say Hello!</h3>
          <div  style={{ alignItems: "left", marginTop: "5rem" }}>
            <MoreBtn text="Contact" href="/contact/" />
          </div>
        </div>

        <div className={styles.socialMedia}>
          <ul>

            <li>
              <span className={styles.listIcon}>
                <FaCodepen></FaCodepen>
              </span>
              <a
                href="https://codepen.io/Magda_"
                target="_blank"
                rel="noreferrer"
              >
                on codepen</a
              >
            </li>

            <li>
              <span className={styles.listIcon}>
                <FaGithub></FaGithub>
              </span>
              <a
                href="https://github.com/maknetaRo"
                target="_blank"
                rel="noreferrer"
              >on github</a
              >
            </li>
            <li>
              <span className={styles.listIcon}>
              <FaTwitter></FaTwitter>
              </span>
              <a
                href="https://twitter.com/makneta"
                target="_blank"
                rel="noreferrer"
              >on twitter</a
              >
            </li>
            <li>
              <span className={styles.listIcon}>
               <FaLinkedin></FaLinkedin>
              </span>
              <a
                href="https://www.linkedin.com/in/magdalena-ros%C5%82aniec-373b977b/"
                target="_blank"
                rel="noreferrer"
              >on linkedin</a
              >
            </li>
          </ul>
        </div>
      </section>
      <FootNote />
    </footer>
  )
}

export default Footer

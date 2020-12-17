import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'gatsby'


const Navbar = props => {
    return (
        <div>
        <nav className={styles.nav}>
        <div className={styles.navInside}>
          <ul className={styles.authorLogo}>
            <li><Link to="/">MR</Link></li>
          </ul>
          <ul className={styles.otherPages}>
            <li className={styles.otherPagesLinks}><Link to="/about/">about</Link></li>
            <li className={styles.otherPagesLinks}><Link to="/projects/">projects</Link></li>
            <li className={styles.otherPagesLinks}><Link to="/articles/">articles</Link></li>
            <li className={styles.otherPagesLinks}><Link to="/contact/">contact</Link></li>
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Navbar

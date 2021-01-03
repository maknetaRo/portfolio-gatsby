import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'gatsby'
import { data } from '../../constants/links'

const tempLinks = data.map(link => {
  return (
      <li className={styles.otherPagesLinks} key={link.id}>
          <Link to={link.url}>{link.text}</Link>
      </li>
  )
})


const Navbar = () => {

    return (
        <div>
        <nav className={styles.nav}>
        <div className={styles.navInside}>
          <ul className={styles.authorLogo}>
            <li><Link to="/">MR</Link></li>
          </ul>
          <ul className={styles.otherPages}>
          {tempLinks}
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Navbar

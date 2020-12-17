import React from 'react'
import styles from "./header.module.css"
import Navbar from "../navbar/navbar"
import About from "../about/about"


const Header = props => {
    return (
      <header className={styles.header}>
       <Navbar />
       <About />
       
      </header>
    )
}

export default Header

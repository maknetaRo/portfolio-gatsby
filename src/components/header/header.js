import React from 'react'
import styles from "./header.module.css"
import Navbar from "../navbar/navbar"
import Hero from "../hero/hero"


const Header = props => {
    return (
      <header className={styles.header}>
       <Navbar />
       <Hero />
       
      </header>
    )
}

export default Header

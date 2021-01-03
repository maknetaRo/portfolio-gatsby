import React from 'react'
import styles from './sectionTitle.module.css'


const SectionTitle = (props) => {
    return (
        
        <h2 className={styles.sectionTitle}>{props.text}</h2>
       
    )
}

export default SectionTitle

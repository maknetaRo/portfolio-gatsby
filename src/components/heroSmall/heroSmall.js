import React from 'react'
import styles from './heroSmall.module.css'

const HeroSmall = (props) => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroInfo}>
                <h1>{props.title}</h1>
                <p>
                   {props.text}
            </p>
            </div>
        </section>
    )
}

export default HeroSmall

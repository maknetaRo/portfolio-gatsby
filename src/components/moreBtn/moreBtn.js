import React from 'react'
import styles from './moreBtn.module.css'

const MoreBtn = props => {
    return (
        <div>
            <a className={styles.mediumMore} href={props.href}>{props.text}</a>
        </div>
    )
}

export default MoreBtn 

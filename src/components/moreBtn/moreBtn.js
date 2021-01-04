import React from 'react'
import styles from './moreBtn.module.css'
import { Link } from 'gatsby'

const MoreBtn = props => {
    return (
        <div>
            <Link className={styles.mediumMore} to={props.href}>{props.text}</Link>
        </div>
    )
}

export default MoreBtn 

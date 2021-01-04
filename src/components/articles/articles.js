import React from 'react'
import styles from './articles.module.css'
import SectionTitle from '../sectionTitle/sectionTitle'
import MoreBtn from '../moreBtn/moreBtn'

const Articles = () => {
  return (
    <section className={styles.articles} id="articles">
      <SectionTitle text="from my blog" />

      <div className={styles.cards}>
        <figure className={styles.card}>
          <div className={styles.topCard}>
            <img src="./img/Name_Generator_1.png" alt="" />
          </div>

          <figcaption className={styles.description} className={styles.article}>
            <div className={styles.title}>
              <h2 className={styles.projectTitle}>
                <a href="">Name Generator in Python</a>
              </h2>
              <div className={styles.rowSubtitle}>
                <h3 className={styles.category}>Python</h3>
                <h3 className={styles.slash}>/</h3>
                <h3 className={styles.date}>Nov. 2, 2020</h3>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                When I started learning to code, I found a pretty long list of
                tasks to do. Some of them were pretty easy, but others were
                much difficult. I solved some of the puzzles then. But now,
                and I want to go through all of them and write about it here.
                The language of my choice (for now) is Python because I
                haven't been using it much recently.
                </p>
            </div>


          </figcaption>
        </figure>

      </div>
      <div className={styles.spaceBottom}>
        <MoreBtn text="View More Posts" href="/articles/" />
      </div>
    </section>
  )
}

export default Articles

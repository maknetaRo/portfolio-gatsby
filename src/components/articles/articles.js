import React from 'react'
import styles from './articles.module.css'
import SectionTitle from '../sectionTitle/sectionTitle'
import MoreBtn from '../moreBtn/moreBtn'

const Articles = () => {
    return (
        <section className={styles.articles} id="articles">
        <SectionTitle text="from my blog"/>
       
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

          <figure class="card">
            <div class="top-card">
              <img src="./img/python-logo.png" alt="" />
            </div>

            <figcaption class="description article">
              <div class="title">
                <h2 class="project-title">
                  <a href=""> How I was learning Python</a>
                </h2>
                <div class="row-subtitle">
                  <h3 class="category">Python</h3>
                  <h3 class="slash">/</h3>
                  <h3 class="date">Sept. 23, 2020</h3>
                </div>
              </div>
              <div class="text">
                <p>
                  Python is my first and favourite programming language (not
                  that I've been learning lots of them). It's friendly for new
                  coders, almost like writing in English. There are also lots of
                  resources for learners.
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

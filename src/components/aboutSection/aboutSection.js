import React from 'react'
import styles from './aboutSection.module.css'

const AboutSection = () => {
    return (
        <article className={styles.aboutArticle} class="card">
        
        <p className={styles.intro} className={styles.description}>
          My name's Magdalena Rosłaniec but I like my internet nickname: makneta.
          I'm a teacher, mother and self-taught developer who wants to change
          her career into programming.
        </p>
        <div class="about-picture">
          <img
            src="./img/spring-lake.jpg"
            alt="spring lake"
            class="about-img"
          />
        </div>
        <p class="description">
          I live in a medium size town in the north-east Poland. I love my small
          fatherland, it's a peaceful place, full of lakes and forests, where I
          enjoy running, nordic walking and riding a bike in my free time.
        </p>
        <div class="about-picture">
          <img
            src="./img/zalew-trees.jpg"
            alt="spring lake"
            class="about-img"
          />
        </div>
        <p class="description">
          I started my adventure with programming in September 2017 and since
          then I've been slowly but steadily learning Python and Django. I've
          learnt also a bit of SQL, JavaScript and C++ but Python is deeply in
          my heart. My other passion is art, so I sometimes "draw" in CSS for
          pleasure.
        </p>
        
        <p class="description">
          I'm taking part in a #100DaysOfCode movement and everyday teach myself
          something new. I'm a driven by these words:
         
          <blockquote>
            “Don't wish it was easier
            wish you were better. Don't wish for less problems wish for more
            skills. Don't wish for less challenge wish for more wisdom”
            <em>Jin Rohn</em> 
        </blockquote> 
          
        </p>
        <div class="about-picture">
            <img
              src="./img/lake_krzywe.jpeg"
              alt="spring lake"
              class="about-img"
            />
        </div>
        </article>
    )
}

export default AboutSection

import React from 'react'
import { data } from '../../constants/links'
import styles from './aboutSection.module.css'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from "gatsby"


const AboutSection = () => {

const data = useStaticQuery(graphql`
fragment squareImage on File {
  childImageSharp {
    fluid(maxWidth: 550, maxHeight: 550) {
      ...GatsbyImageSharpFluid
    }
  }
}

query {
  image1: file(relativePath: { eq: "about/lake_krzywe.png" }) {
    ...squareImage
  }

  image2: file(relativePath: { eq: "about/spring-lake.png" }) {
    ...squareImage
  }

  image3: file(relativePath: { eq: "about/zalew-trees.png" }) {
    ...squareImage
  }
}
`);

  
  const { image1, image2, image3 } = data
  console.log(data)
  console.log(image1.childImageSharp.fluid)
    return (
      <section>
        <article className={styles.card}>
        
        <p className={styles.intro}>
          My name's Magdalena Rosłaniec but I like my internet nickname: makneta.
          I'm a teacher, mother and self-taught developer who wants to change
          her career into programming.
        </p>
        <div >
          <Img fluid={image1.childImageSharp.fluid}
            alt="spring lake"
            style={{maxWidth: "550px", margin: "3rem auto", borderRadius: "5px",
            boxShadow: "1px 3px 3px 1px rgba(0, 0, 0, 0.5"}}
            loading="eager"
            
          />
        </div>
        <p className={styles.description}>
          I live in a medium size town in the north-east Poland. I love my small
          fatherland, it's a peaceful place, full of lakes and forests, where I
          enjoy running, nordic walking and riding a bike in my free time.
        </p>
        <div >
        <Img fluid={image2.childImageSharp.fluid}
            alt="spring lake"
            style={{maxWidth: "550px", margin: "3rem auto", borderRadius: "5px",
            boxShadow: "1px 3px 3px 1px rgba(0, 0, 0, 0.5"}}
            loading="eager"
           
          />
        </div>
        <p className={styles.description}>
          I started my adventure with programming in September 2017 and since
          then I've been slowly but steadily learning Python and Django. I've
          learnt also a bit of SQL, JavaScript and C++ but Python is deeply in
          my heart. My other passion is art, so I sometimes "draw" in CSS for
          pleasure.
        </p>
        
        <p className={styles.description}>
          I take part in a #100DaysOfCode movement and everyday teach myself
          something new. I'm a driven by these words:
         
          <blockquote className={styles.blockquote}>
            “Don't wish it was easier
            wish you were better. Don't wish for less problems wish for more
            skills. Don't wish for less challenge wish for more wisdom” 
            <em>Jin Rohn</em> 
        </blockquote> 
          
        </p>
        <div >
        <Img fluid={image3.childImageSharp.fluid}
              alt="spring lake"
              style={{ maxWidth: "550px", margin: "3rem auto", borderRadius: "5px",
              boxShadow: "1px 3px 3px 1px rgba(0, 0, 0, 0.5"}}
              loading="eager"
              
            />
        </div>
        </article>
      </section>
    )
}

export default AboutSection

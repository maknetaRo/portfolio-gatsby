import React from "react"
import Layout from "../components/layout"
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import HeroSmall from '../components/heroSmall/heroSmall'
import AboutSection from '../components/aboutSection/aboutSection'


const About = () => {
    return (
        <Layout>
            <header>
                <Navbar />
                <HeroSmall title="Who am I?" />
            </header>
            <main>
                <AboutSection />
            </main>
            <Footer />
        </Layout>
    )
}

export default About

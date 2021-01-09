import React from 'react'
import Layout from "../components/layout"
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import HeroSmall from '../components/heroSmall/heroSmall'

const Blog = () => {
    return (
        <Layout>
            <header style={{ display: "flex", flexDirection: "column" }}>
                <Navbar />
                <HeroSmall title="My articles" />
            </header>


            <main>

            </main>

            <Footer />

        </Layout>
    )
}

export default Blog
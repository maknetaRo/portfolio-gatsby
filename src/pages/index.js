import React from "react"
import Layout from "../components/layout"
import Articles from '../components/articles/articles'
import Projects from '../components/projects/projects'
import Footer from '../components/footer/footer'
import Navbar from "../components/navbar/navbar"
import Hero from "../components/hero/hero"

import "../../static/styles/reset.css"
import "../../static/styles/style.css"


export default function Home() {
  return <Layout>

    <header>
      <Navbar />
      <Hero />
    </header>
    <main>
      <Projects />
      <Articles />
    </main>
    <Footer />

  </Layout>
}

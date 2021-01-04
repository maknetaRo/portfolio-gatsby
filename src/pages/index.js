import React from "react"
import Layout from "../components/layout"
import Articles from '../components/articles/articles'
import Projects from '../components/projects/projects'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import SEO from "../components/seo"

import "../../static/styles/reset.css"
import "../../static/styles/style.css"


export default function Home() {
  return <Layout>

    <Header />
    <main>
      <Projects />
      <Articles />
    </main>
    <Footer />

  </Layout>
}

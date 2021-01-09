import React from 'react'
import Layout from "../components/layout"
import Navbar from '../components/navbar/navbar'
import FootNote from '../components/footNote/footNote'
import HeroSmall from '../components/heroSmall/heroSmall'
import ContactForm from '../components/contactForm/contactForm'

const Contact = () => {
    return (
        <Layout>
            <header style={{ display: "flex", flexDirection: "column" }}>
                <Navbar />
                <HeroSmall title="Contact" text="For all enquiries email me using the form below." />
            </header>
            <main>
                <ContactForm />

            </main>
            <FootNote />

        </Layout>
    )
}

export default Contact

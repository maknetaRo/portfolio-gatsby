import React from 'react'
import styles from './contactForm.module.css'


const ContactForm = () => {
    return (
        <section className={styles.contactPage}>
            <article className={styles.contactForm}>

                <form action="https://formspree.io/f/xeqpvzpr" method="POST">
                    <div className={styles.formGroup}>
                        <h3>What can I do for you?</h3>
                        <input type="text" name="name" placeholder="name" className={styles.formControl} />
                        <input type="email" name="_replyto" placeholder="email" className={styles.formControl} />


                        <textarea name="massage" id="message" rows="25" placeholder="message" className={styles.formControl} />
                        <button type="submit" className={styles.submitBtn} >submit here</button>
                    </div>
                </form>

            </article>
        </section>
    )
}

export default ContactForm

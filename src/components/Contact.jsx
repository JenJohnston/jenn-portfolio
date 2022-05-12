import React from 'react'

import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { RiWhatsappLine } from 'react-icons/ri'
export default function Contact() {
    
    const email = 'mailto:jen.johnston@protonmail.ch'

    return (
        <section id="contact">
            <div className="section__header">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <h4>Email</h4>
                        <h5>jen.johnston@protonmail.ch</h5>
                        <a href={email} ></a>
                    </article>
                </div>
                <form action="POST">

                </form>
            </div>
        </section>
    )
}

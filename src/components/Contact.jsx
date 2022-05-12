import React from 'react'

import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { RiWhatsappLine } from 'react-icons/ri'
export default function Contact() {
    
    const email = 'mailto:jen.johnston@protonmail.ch'
    const messenger = 'https://m.me/jennifer.johnston.96558061'
    const whatsApp = 'https://api.whatsapp.com/send?phone=+17802314506'

    return (
        <section id="contact">
            <div className="section__header">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__icon'/>
                        <h4>Email</h4>
                        <h5>jen.johnston@protonmail.ch</h5>
                        <a href={email} target="_blank" rel="noopener noreferrer">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__icon'/>
                        <h4>Messenger</h4>
                        <h5>Jennifer Johnston</h5>
                        <a href={messenger} target="_blank" rel="noopener noreferrer">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiWhatsappLine className='contact__icon'/>
                        <h4>WhatsApp</h4>
                        <h5>(780)231-4506</h5>
                        <a href={whatsApp} target="_blank" rel="noopener noreferrer">Send a Message</a>
                    </article>
                </div>
                <form action="POST" name="contact-form" data-netlify="true" netlify>
                <input type="hidden" name="form-name" value="contact-form"/>
                    <input type="text" name="name" placeholder='your full name' required/>
                    <input type="email" name="email" placeholder='your email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

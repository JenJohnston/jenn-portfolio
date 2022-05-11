import React from 'react'

import aboutImg from '../assets/images/me-about.jpg'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFoldersLine } from 'react-icons/ri'
export default function About() {
    

    return (
        <section id="about">
           <div className="section__header">
                <h5>Allow Me To</h5>
                <h2>Introduce Myself</h2>
           </div>
           <div className="container about__container">
               <div className="about__me">
                    <div className="about__me-img">
                        <img src={aboutImg} alt="Portrait of Jennifer Johnston" />
                    </div>                    
               </div>
               <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>Taking Clients Daily</small>
                        </article>
                        <article className="about__card">
                            <RiFoldersLine className='about__icon'/>
                            <h5>Projects</h5>
                            <small>6 Completed Projects</small>
                        </article>
                    </div>

                    <p className="about__text">
                    Little Bobby Tables kernel senior-engineer strongly typing Ruby controller. Middleware raspberry pi free as speech REST Vue LLVM lazy package manager. Raspberry pi cross-post progressive web app fullstack ELF modern bundle transpile kernel fault tolerant browser. Singleton compression optimize bootcamp hashtable data store architecture module.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
               </div>
           </div>
        </section>
    )
}

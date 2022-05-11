import React from 'react'

import img1 from '../assets/images/portfolio1.jpg'

export default function Portfolio() {
    

    return (
        <section id="portfolio">
            <div className="section__header">
                <h5>My Work</h5>
                <h2>Web Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                <article className="porfolio__item">
                    <div className="portfolio__img">

                    </div>
                    <h3>Portfolio Item Title</h3>
                    <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                    <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                </article>
            </div>
        </section>
    )
}

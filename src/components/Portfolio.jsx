import React from 'react'

import img1 from '../assets/images/portfolio1.jpg'
import img2 from '../assets/images/portfolio2.jpg'
import img3 from '../assets/images/portfolio3.jpg'
import img4 from '../assets/images/portfolio4.jpg'
import img5 from '../assets/images/portfolio5.png'
import img6 from '../assets/images/portfolio6.jpg'

export default function Portfolio() {
    

    return (
        <section id="portfolio">
            <div className="section__header">
                <h5>My Work</h5>
                <h2>Web Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__cta">
                        <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                        <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__cta">
                        <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                        <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__cta">
                        <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                        <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__cta">
                        <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                        <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__cta">
                        <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                        <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__cta">
                        <a href="https://github.com/JenJohnston" className='btn-std' >Github</a>
                        <a href="https://magic-portal-demo.netlify.app/" className='btn-primary' >Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

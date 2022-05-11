import React from 'react'
import portfolioData from '../data/portfolioData'

export default function Portfolio() {
    

    return (
        <section id="portfolio">
            <div className="section__header">
                <h5>My Work</h5>
                <h2>Web Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                {
                    portfolioData.map(({id, image, title, github, livedemo}) => {
                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__img">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__cta">
                                    <a href={github} className='btn-std' >Github</a>
                                    <a href={livedemo} className='btn-primary'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

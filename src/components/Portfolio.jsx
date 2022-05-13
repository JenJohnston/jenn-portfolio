import React, {useEffect} from 'react'
import portfolioData from '../data/portfolioData'

import AOS from 'aos';
import "aos/dist/aos.css";

export default function Portfolio() {
    
    useEffect(() => {
        AOS.init({
          duration : 2000,
          disable: false,
          delay: 200,
        });
      }, []);

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
                            <article className="portfolio__item" key={id} data-aos="zoom-out">
                                <div className="portfolio__img">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__cta">
                                    <a href={github} className='btn-std' target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={livedemo} className='btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
